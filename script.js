const clockElement = document.getElementById('clock');

async function updateClock() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/ip');
        const data = await response.json();
        const datetime = new Date(data.datetime);
        const hours = datetime.getHours().toString().padStart(2, '0');
        const minutes = datetime.getMinutes().toString().padStart(2, '0');
        const seconds = datetime.getSeconds().toString().padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    } catch (error) {
        console.error('Erro ao buscar a hora:', error);
        clockElement.textContent = "Erro ao carregar a hora.";
    }
}

// Chama inicialmente
updateClock();

// Atualiza a cada 1 segundo
setInterval(updateClock, 1000);
