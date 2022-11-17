const form = document.getElementById('formulario1');

form.addEventListener('submit', function(element) {
    element.preventDefault();

    const formData = new FormData(form);
    var nombre=formData.get("nombreUsuario");

});