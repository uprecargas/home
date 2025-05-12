function aplicarDesconto() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Domingo) a 6 (Sábado)

    if (dayOfWeek === 1) { // 1 representa Segunda-feira
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const precoElement = card.querySelector('h4');
            let precoOriginal = parseFloat(card.dataset.preco.replace(',', '.'));
            const desconto = precoOriginal * 0.10;
            const precoComDesconto = precoOriginal - desconto;
            precoElement.textContent = `R$ ${precoComDesconto.toFixed(2)}`;
        });
    } else {
        alert("Hoje não temos desconto nesse produto, tente outro produto ou volte Segunda-feira!");
    }
}