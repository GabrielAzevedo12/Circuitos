fgs.$("#GerarTransistor").onclick = (e) => {

    var w,div_lista_transistor = fgs.$("#div_lista_transistor"), valorAtualTop;
    console.log("onclick_GerarTransistor iniciada");

    if ( fgs.Existe_Class(div_lista_transistor,"displayFalse") ) {

        //exibição true
        exibir(div_lista_transistor);
    } else {

        //exibição false
        esconder(div_lista_transistor);

    }

   
}

let plotar = (e,a) => {

    var  i = 0;

    for(x of a) {

        if(a[i+1]) {

            console.log(a[i+1] + " está definido ... ")

        } else {

            a[i+1] = e;
            break;

        }

        i = i+1;

    }

    if (a.length === 0 ) {
        a[0] = e;
    }

    return a;

}

const Transistors_OBJECT = {
    array_transistors : [],
    object_transistors : {},
    project_transistors : {
        object : {},
        array : []
    }
};

const gerarTransistor = (e_id,type) => {

    let click_transistor = (e) => {
/*
        let 
        entradaFinal = e.target.childNodes[2], 
        s1_vinculoState = () => {

            let 
            fios = entradaFinal.vinculo.ligaçoes,
            vinculado = entradaFinal.vinculo.id; 

            if(vinculado.vinculo.id === entradaFinal) {
                for ( let fio of fios ) {
                    fio.remove();
                }
                Ligar_obj.arg1 = vinculado; 
                Ligar_obj.arg2 = entradaFinal;
                Ligar_xy_2(Ligar_obj.arg1, Ligar_obj.arg2);
        } else {
            console.log("Não existe um vínculo de ligação de " + entradaFinal)
        }

        }, 
        s2_vinculoState = () => {

            console.log("A entrada final está fora de uso")

        } ;
*/
        

    };

    let
    transistor_x_Identificaçao = {
    
        typeElement: undefined,
        pai: undefined,
        id: e_id,
        className: "deslocamentoPeloMouse",
        styleText: undefined,
    
    },
    
    transistor_x_Geometria = {
    
        x: undefined,
        y: undefined,
        height: undefined,
        width: undefined,
        DeslocamentoTo : undefined,
        pontoInicial: undefined,
        unidadeDeslocamento: undefined,
    
    },
    
    transistor_x_Event = {
        events: ["click","dragstart","drag"],
        function_events: [
            (e)=>{
                //click
                click_transistor(e);
            },
            (e) => {
                //dragstart
                e.dataTransfer.setData("element", e.target.id);
            },
            (e) => {
                //drag
                //console.log("O elemento de id : " +  e.target.id + " está sendo deslocado");
                //console.log(e.target.parentElement);
                /*
                if(e.target.parentElement === fgs.$("#div_lista_transistor")) {
                    if_transistor(e.target);
                }
                */
                obj_arrastado.element = e.target;
                //fgs.$(".transistors").append(e.target);
                /*
                obj_arrastado.element = e.target;
                let 
                rv_perpendicular = fgs.$("#rv_perpendicular"),
                rh_perpendicular = fgs.$("#rh_perpendicular"),
                ultima_fila = fgs.$("#fila_xyP49").getBoundingClientRect();

                rv_perpendicular["style"]["height"] = window.innerHeight + 3*window.innerWidth*0.01 + "px";
                rh_perpendicular["style"]["width"] = window.innerWidth + "px";
                        
                fgs.Remover_class(rv_perpendicular,"displayFalse");
                fgs.Remover_class(rh_perpendicular,"displayFalse");
                fgs.Adicionar_class(rv_perpendicular,"displayTrue");
                fgs.Adicionar_class(rh_perpendicular,"displayTrue");

                let
                [tx,ty] = [e.target.getBoundingClientRect().x,e.target.getBoundingClientRect().y],
                [rvx,rvy] = [rv_perpendicular.getBoundingClientRect().x,rv_perpendicular.getBoundingClientRect().y],
                [rhx,rhy] = [rh_perpendicular.getBoundingClientRect().x,rh_perpendicular.getBoundingClientRect().y];

                Deslocar(rv_perpendicular, tx - rvx, ultima_fila.y - rvy);
                */
            }
        ],
    
    },
    
    transistor_x_Atributos = {

        nomes: ["draggable"],
        valores: ["true"],
    
    },

    transistor_x_Transistor = {
    
        typeTransistor: type,
        entradaInicial_1: undefined,
        entradaInicial_2: undefined,
        entradaFinal: undefined,
        entradaText: undefined,
        text: undefined,
    
    };
    
    let transistor_x = new Transistor2(transistor_x_Identificaçao, transistor_x_Geometria, transistor_x_Event, transistor_x_Atributos, transistor_x_Transistor);

    transistor_x.element.propsClass = {

    "Identificaçao_arg" : transistor_x_Identificaçao, 
    "Geometria" : transistor_x_Geometria,
    "Event" : transistor_x_Event,
    "Transistor" : transistor_x_Transistor,

    };

    transistor_x.Create();
    plotar(transistor_x, Transistors_OBJECT.array_transistors);
    Transistors_OBJECT.object_transistors[transistor_x.Identificaçao.id] = transistor_x;
    return transistor_x;

}

//teste gerarTransistor

let transistor_x = gerarTransistor("transistor_x","basic");
transistor_x.Deslocar_to(fgs.$("#Px1Py10"));

let transistor_y = gerarTransistor("transistor_y","ligarDesligar");
transistor_y.Deslocar_to(fgs.$("#Px5Py10"));

let transistor_x2 = gerarTransistor("transistor_x2","basic");
transistor_x2.Deslocar_to(fgs.$("#Px1Py10"));

let transistor_y2 = gerarTransistor("transistor_y2","ligarDesligar");
transistor_y2.Deslocar_to(fgs.$("#Px5Py10"));

let transistor_and = gerarTransistor("transistor_and","and");
transistor_and.Deslocar_to(fgs.$("#Px5Py20"));

let transistor_or = gerarTransistor("transistor_or","or");
transistor_or.Deslocar_to(fgs.$("#Px5Py30"));
