function calculateBudget(){
    let income = Number(document.querySelector("#income-number").value);
    let needsPercent = Number(document.querySelector("#needs").value);
    let wantsPercent = Number(document.querySelector("#wants").value);
    let savingsPercent = Number(document.querySelector("#savings").value);

    // calculate Needs
    let needsBudget = (needsPercent * income) / 100;
    document.querySelector("#needsTotal").innerHTML = needsBudget;

    // calculate Wants
    let wantsBudget = (wantsPercent * income) / 100;
    document.querySelector("#wantsTotal").innerHTML = wantsBudget;

    // calculate Savings
    let savingsBudget = (savingsPercent * income) / 100;
    document.querySelector("#savingsTotal").innerHTML = savingsBudget;
}
