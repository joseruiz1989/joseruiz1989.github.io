import http.server
import socketserver
import webbrowser
import sys

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    sys.stderr.reconfigure(encoding='utf-8', errors='replace')

PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Deshabilitar cache local para desarrollo
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run_server():
    handler = CustomHTTPRequestHandler
    port = PORT
    
    while port < 8020:
        try:
            with socketserver.TCPServer(("", port), handler) as httpd:
                url = f"http://localhost:{port}"
                print("=" * 60)
                print(f"  🚀 Servidor local iniciado correctamente")
                print(f"  📄 Catálogo de proyectos: {url}/projects.html")
                print(f"  ⚛️  Página de e-mulate: {url}/emulate-quantum-simulator.html")
                print(f"  🛑 Presiona Ctrl+C en esta terminal para detenerlo")
                print("=" * 60)
                
                # Abre automáticamente el navegador predeterminado
                webbrowser.open(url)
                
                httpd.serve_forever()
        except OSError:
            port += 1

if __name__ == "__main__":
    try:
        run_server()
    except KeyboardInterrupt:
        print("\n  Servidor detenido exitosamente.")
        sys.exit(0)




