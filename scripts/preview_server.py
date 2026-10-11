from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import re
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parent.parent
REDIRECTS = {
    '/about': '/about.html',
    '/services': '/services.html',
    '/our-work': '/work.html',
    '/our-events': '/work.html',
    '/case-studies': '/case-studies.html',
    '/science-experience': '/experience.html',
    '/team': '/team.html',
    '/contact': '/contact.html',
    '/social': '/social.html',
}
CLIENT_ROUTES = (
    re.compile(r'^/(?:about|services|science-experience|team)/[^/]+/?$'),
    re.compile(r'^/our-work/[^/]+/?$'),
    re.compile(r'^/our-work/[^/]+/gallery/?$'),
)


class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Pragma', 'no-cache')
        super().end_headers()

    def send_head(self):
        request_path = urlsplit(self.path).path
        file_path = Path(self.translate_path(request_path)).resolve()

        if request_path in REDIRECTS:
            self.send_response(301)
            self.send_header('Location', REDIRECTS[request_path])
            self.end_headers()
            return None

        try:
            file_path.relative_to(ROOT)
        except ValueError:
            self.send_error(404, 'File not found')
            return None

        if any(part.startswith('.') for part in file_path.relative_to(ROOT).parts):
            self.send_error(404, 'File not found')
            return None

        if file_path.is_file() or file_path.is_dir():
            return super().send_head()

        if any(route.fullmatch(request_path) for route in CLIENT_ROUTES):
            self.path = '/index.html'
            return super().send_head()

        self.send_error(404, 'File not found')
        return None


if __name__ == '__main__':
    server = ThreadingHTTPServer(('127.0.0.1', 4173), PreviewHandler)
    print(f'Preview server running at http://127.0.0.1:{server.server_port}/')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nPreview server stopped.')
    finally:
        server.server_close()
