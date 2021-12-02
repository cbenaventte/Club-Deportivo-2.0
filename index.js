const url = require('url')
const http = require('http')
const fs = require('fs')

const server = http
    .createServer((req,res) => {
    if (req.url == '/') {
      res.writeHead(200,{'Content-Type':'text:html'});
            fs.readFile('index.html','utf8',(err,html) => {
                res.end(html);
            })
    }

    let deportesJSON = JSON.parse(fs.readFileSync("Deportes.json", "utf8"));
    let deportes = deportesJSON.deportes;

    if (req.url.startsWith('/deportes') && req.method == 'GET') {
      res.end(JSON.stringify(deportesJSON, null, 1));
    }


    if (req.url.startsWith('/agregar') && req.method == 'POST') {
      let body;
      req.on("data", (payload) => {
        body = JSON.parse(payload);
      });
      // Paso 4
      req.on("end", () => {
        // Paso 5
        let deporte = {
          nombre: body.nombre,
          precio: body.precio
        };
        deportes.push(deporte);

        if(body.nombre == '' || body.precio == ''){
          console.log('oh oh..., Falta completar los campos ')
        }
        else {
          fs.writeFileSync('Deportes.json',JSON.stringify(deportesJSON,null,1));
          res.end();
        }

      })
    }


    if (req.url.startsWith('/editar') && req.method == 'PUT') {
      let body;
      req.on("data", (payload) => {
        body = JSON.parse(payload);
      });
      req.on("end", () => {
        // Paso 2
        deportesJSON.deportes = deportes.map((d) => {
          if (d.nombre == body.nombre) {
            return body;
          }
          return d;
        });
        if(body.nombre == '' || body.precio == ''){
          console.log('oh oh..., Falta completar los campos ')
        }
        else {
          fs.writeFileSync('Deportes.json',JSON.stringify(deportesJSON,null,1));
          res.end();
        }

      })
    }

    if (req.url.startsWith('/eliminar') && req.method == 'DELETE') {
      const { nombre } = url.parse(req.url, true).query;
      // Paso 4
      deportesJSON.deportes = deportes.filter((d) => d.nombre !== nombre);


      fs.writeFileSync("Deportes.json", JSON.stringify(deportesJSON, null, 1))
      res.end();
    }
  })
  .listen(3000, () => console.log('Escuchando puerto 3000'))

  module.exports = server;
