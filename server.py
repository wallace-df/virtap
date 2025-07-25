import http.server
import socketserver
import os
from urllib.parse import urlparse, unquote

PORT = 8000

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed_url = urlparse(self.path)
        raw_path = unquote(parsed_url.path)

        # Se não tem extensão e o .html correspondente existe, usa ele
        if raw_path != "/" and not os.path.splitext(raw_path)[1]:
            html_file = raw_path[1:] + ".html"
            if os.path.exists(html_file):
                self.path = "/" + html_file
                if parsed_url.query:
                    self.path += "?" + parsed_url.query

        return super().do_GET()

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"Servidor rodando em http://localhost:{PORT}")
        httpd.serve_forever()

