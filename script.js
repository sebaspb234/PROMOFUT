document.addEventListener('DOMContentLoaded', function () {
    // Agregar comportamiento a los botones de "Iniciar Sesión" y "Registrarse"
    const loginButton = document.getElementById('login-button');
    const formularioContainer = document.querySelector('.formulario-container');
    const loginForm = document.getElementById('login-form');
    const submitButton = document.getElementById('submit-button');

    loginButton.addEventListener('click', function () {
        formularioContainer.style.display = 'block';
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita que el formulario se envíe (puedes agregar lógica de inicio de sesión aquí)

        // Supongamos que aquí verificas el inicio de sesión, si es exitoso:
        formularioContainer.style.display = 'none';
    });

    const registroButton = document.getElementById('register-button');
    const registroModal = document.getElementById('registro-modal');
    const registroForm = document.getElementById('registro-form');

    registroButton.addEventListener('click', function () {
        registroModal.style.display = 'block';
    });

    registroForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío del formulario, agrega lógica de registro aquí

        // Supongamos que aquí verificas el registro, si es exitoso:
        registroModal.style.display = 'none';
    });

    // Detalles de la cancha, dependiendo de que cancha se quiera revisar
    const detallesButtons = document.querySelectorAll('.detalles-button');
    const canchaModal = document.getElementById('cancha-modal');
    const whatsappButton = document.getElementById('whatsapp-button'); // Agrega un identificador a tu botón de WhatsApp

    // Contenedores de información de cada cancha
    const canchas = [
        {
            id: 'cancha1-details',
            imageSrc: 'cancha1.jpeg',
            tipoSuperficie: 'Césped artificial',
            dimensiones: '90x50 metros',
            serviciosAdicionales: 'Vestuarios, iluminación',
            ubicacion: 'Calle de Ejemplo 1, Ciudad 1',
            precioHora: 'S/.30',
            precioDia: 'S/.250',
            promocion: 'Descuento del 10% en reservas de 3 horas o más.',
            whatsappNumero: '+51987115100',
        },
        {
            id: 'cancha2-details',
            imageSrc: 'cancha2.jpeg',
            tipoSuperficie: 'Cancha de arcilla',
            dimensiones: '80x40 metros',
            serviciosAdicionales: 'Vestuarios, bar',
            ubicacion: 'Calle de Ejemplo 2, Ciudad 2',
            precioHora: 'S/.25',
            precioDia: 'S/.200',
            promocion: 'Reserva 2 horas y obtén 1 hora gratis.',
            whatsappNumero: '+51952136108',
        },
        {
            id: 'cancha3-details',
            imageSrc: 'cancha3.jpg',
            tipoSuperficie: 'Césped natural',
            dimensiones: '100x60 metros',
            serviciosAdicionales: 'Vestuarios, restaurante',
            ubicacion: 'Calle de Ejemplo 3, Ciudad 3',
            precioHora: 'S/.35',
            precioDia: 'S/.300',
            promocion: 'Reserva en grupo de 10 personas y obtén un 20% de descuento.',
            whatsappNumero: '+51995486624',
        },
    ];

    // Define una función para manejar la redirección de WhatsApp
function redirectToWhatsApp(numero, mensaje) {
    whatsappButton.href = `https://wa.me/${numero}/?text=${mensaje}`;
}


    detallesButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Obtén el ID del botón que se presionó
            const buttonId = button.id;
            
            // Busca la información de la cancha correspondiente
            const cancha = canchas.find(c => c.id === buttonId);

            // Actualiza los elementos del cuadro modal con la información de la cancha
            document.getElementById('cancha-image').src = cancha.imageSrc;
            document.getElementById('tipo-superficie').textContent = cancha.tipoSuperficie;
            document.getElementById('dimensiones').textContent = cancha.dimensiones;
            document.getElementById('servicios-adicionales').textContent = cancha.serviciosAdicionales;
            document.getElementById('ubicacion').textContent = cancha.ubicacion;
            document.getElementById('precio-hora').textContent = cancha.precioHora;
            document.getElementById('precio-dia').textContent = cancha.precioDia;
            document.getElementById('promocion').textContent = cancha.promocion;

            // Agrega la redirección a WhatsApp
        redirectToWhatsApp(cancha.whatsappNumero, `¡Hola! Me interesa esta cancha: ${cancha.ubicacion}`);

            canchaModal.style.display = 'block';
        });
    });

    // Agrega comportamiento para cerrar el cuadro modal al hacer clic en el botón de cierre
    const closeButton = document.getElementById('close-button');

    closeButton.addEventListener('click', function () {
        canchaModal.style.display = 'none';
    });

    // Agrega comportamiento para cerrar el cuadro modal al hacer clic fuera de él
    window.addEventListener('click', function (event) {
        if (event.target === canchaModal) {
            canchaModal.style.display = 'none';
        }
    });
});

// Barra de busqueda
const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
  }
  
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", clearInput);
  
