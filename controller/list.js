const List = require('../model/list')

exports.add = async (req, res, next) => {
    try {
        const { id_card, tell, birth_day,book_day } = req.body;
        const check = await List.findOne({ where: { id_card:id_card } })
        if(check) {
            const error = new Error('พบข้อมูลซ้ำ')
            error.statusCode = 400
            throw error
        }
        await List.create({
            id_card: id_card,
            tell: tell,
            birth_day: birth_day,
            book_day: book_day
        })
            res.status(200).json({
                message: 'Success'
            })
    }catch(error){
        next(error)
    }
    
}