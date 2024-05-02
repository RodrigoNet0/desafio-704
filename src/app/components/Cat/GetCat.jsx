import Image from "next/image";

export default function GetCat(){
    const GetDataCat = async (e) => {
        e.preventDefault();
        try {
          const response = await apiGatos.buscarGato();
          return console.log(response);
        } catch (error) {
          console.error('Erro ao enviar formulário:', error);
        }
      };

      return (
        <div>
            {Array.isArray(GetDataCat) && GetDataCat.map((e) => (
                <div key={e.data.id}>
                    <Image url={e.data} />
                    <p>{e.data}</p>
                </div>
            ))}
        </div>
      )
}