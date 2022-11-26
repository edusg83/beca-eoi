const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};

const urlGoal = ("http://ligafalm.eu:28100/goals/");
const urlProducts = ("http://ligafalm.eu:28100/products/");
const urlTransactions = ("http://ligafalm.eu:28100/transactions/");
const form = document.getElementById('formularioPostGoalsTransactions');
let init = `
    <div class="mb-3 newProd">Nueva Transaccion</div>
    <div class="modal-body">
        <form id="formularioPostGoalsTransactions">
            
        </form>
    </div>
`;
let formulario = ``;

axios.get(urlProducts,{headers})
.then((respuestaProducts) => {
    let initSel1 = `
        <div class="mb-3">
            <label for="transactionPost-code" class="col-form-label">Product Code:</label>
            <select id="transactionPost-code" class="form-select" aria-label="Default select example">
    `;
    let filas1 = ``;    
    let finSel1 = `
            </select>
        </div>
        <div class="mb-3">
            <label for="transactionPost-total" class="col-form-label">Total vendido:</label>
            <input type="number" class="form-control" id="transactionPost-total">
        </div>
    `;

    respuestaProducts.data.forEach(transactionProd => {
        filas1 += `
            <option value="${transactionProd.name}">${transactionProd.name}</option>
        `;
    });

// URL GOAL 
    axios.get(urlGoal,{headers})
    .then((respuestaTransactions) => {
        let initSel2 = `
            <div class="mb-3">
                <label for="transactionPost-goal" class="col-form-label">Selecciona el goal asignado:</label>
                <select id="transactionPost-goal" class="form-select" aria-label="Default select example">
        `;
        let filas2 = ``;
        let finSel2 = `
                </select>
            </div>
        `;    
        let fin = `
            <div class="modal-footer">
                <input type="submit" class="btn btn-primary" value="Guardar">
            </div>
        `;
        respuestaTransactions.data.forEach(transactionProd => {
            filas2 += `
                <option value="${transactionProd.id}">${transactionProd.name}</option>
            `;
        });

        formulario += initSel1 + filas1 + finSel1 + initSel2 + filas2 + finSel2 + fin;
        form.innerHTML += formulario;
    });
});

form.addEventListener('submit', function(element) {
    element.preventDefault();
    let total = parseInt(document.getElementById("transactionPost-total").value);
    let goal = parseInt(document.getElementById("transactionPost-goal").value);

    const dataRequest = {
        "productCode":document.getElementById("transactionPost-code").value,
        "total":total,
        "type":"SELL",
        "done":1,
        "goal":goal
    };

    axios.post(urlTransactions,dataRequest,{headers})
    .then((respuesta) => {
        console.log(respuesta);
        window.location.assign("../transactions.html");
    })
    .catch((error) => {
        console.warn(error);
    });
}, false);