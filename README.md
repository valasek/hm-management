mutation create {
  create(
    input:{id:"10",type:"notebook",manufacturer:"Dell",series:"series",serialNumber:"serialNuber",bought:"leden",warrantyExpires:"unor",user:"Stanislav",department:"devul"})
  {
  	id
	}
}

query getHw {
  getHw {
    id,type,manufacturer,series,serialNumber,bought,warrantyExpires,user,department
  }
}

go run github.com/99designs/gqlgen generate

go run github.com/99designs/gqlgen init