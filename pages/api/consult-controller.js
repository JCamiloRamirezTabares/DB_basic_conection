import db from "../../repository/consult-api/database";

async function consult(req, res){
    if(req.body.data){
        const data = await db.query(req.body.query, req.body.data);
        db.end();
        return res.json()
    } else{
        const data = await db.query(req.body.query);
        db.end();
        return res.json(data.rows)
    } 
}

export default consult