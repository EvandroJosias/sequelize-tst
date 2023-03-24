(async () => {

    const database = require('./db/db');
    const Produto  = require('./model/produto');
    await database.sync();

    // Cria o registro produto no DB
    const Produto1 = await Produto.create({
        nome: "Mouse USB",
        preco: 15,
        descricao: "Mouse USB Logitech wireless"
    })

    const Produto2 = await Produto.create({
        nome: "Monitor LED",
        preco: 300,
        descricao: "Monitor LED AOC 1920x1080 Full HD"
    })

    // Le todos os registros no DB
    const produtos = await Produto.findAll();
    console.log(produtos);

    const prod1 = await Produto.findAll({
        where: {
            preco: 15
        }
    });
    console.log(prod1);
    // Alteracao do preco do mouse de 15 para 25
    try {
        await Produto.update(
            // Conjunto de campos para alterar
            { preco: 25 },
            // Where clause / criteria 
            { where:{ id : 1 } }           
        )
    } catch (error) {
        console.log("Falha nao conseguiu alterar o produto!");
    }

    const bef_prod = await Produto.findAll();
    console.log(bef_prod);

    await Produto.destroy({where:{preco:25}})

    const aft_prod = await Produto.findAll();
    console.log(aft_prod);

    await Produto.destroy({ where: {}, truncate: true });


})();