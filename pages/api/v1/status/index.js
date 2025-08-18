function status(request, response) {
  // response.status(200).send("uma pequena mensagem que não aceita acentos")
  response.status(200).json({ chave: "data" });
}

export default status;
