import express from 'express';

export default function(app) {
    app.get('/', (req, res) =>{
        res.send(['water', 'phone', 'paper']);
    });
}
