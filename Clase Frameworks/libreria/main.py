# pip install requests
import requests
import time
from datetime import datetime

# Registrar el tiempo de inicio
start_time = time.time()


response = requests.get('http://localhost:8080/')

post = response.json()
print(post)

# Calcular el tiempo total de la solicitud
end_time = time.time()
elapsed_time = end_time - start_time

# Obtener la fecha y hora actual
current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

print(f"La solicitud tomó {elapsed_time:.2f} segundos")
print(f"Fecha y hora de la solicitud: {current_time}")
