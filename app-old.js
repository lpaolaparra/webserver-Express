const http =  require('http');

//para poder escuchar peticiones http primero tenemos
// que crear el servidor

http.createServer((req,res)=>{
    
        res.writeHead(200,{'Content-Type':'application/json'})
        let salida = {
            nombre:'Fernando',
            edad:32,
            url:req.url
        }
        res.write(JSON.stringify( salida ));
        res.end();
    })
    .listen(3000);
console.log('Escuca en el puerto 3000')