fgs.$("#AtivarDeslocamentoClick").onclick = (e) => {

    console.log("onclick_ativarDeslocamento está sendo executada")

    if(Deslocar_obj.permissao_deslocamento === false) {

        Deslocar_obj.permissao_deslocamento = true;
        //fgs.Remover_class(e.target,"buttonsFalse");
        //fgs.Adicionar_class(e.target,"buttonsTrue");
        fgs.Remover_class(e.target,"Buttons_Edit");
        fgs.Adicionar_class(e.target,"ButtonsAtivado");
        fgs.new_text(e.target, "Desativar Deslocamento pelo Click");
        alterarClickTransistor1();
    
    } else { 

        Deslocar_obj.permissao_deslocamento = false;
        //fgs.Remover_class(e.target,"buttonsTrue");
        //fgs.Adicionar_class(e.target,"buttonsFalse");
        fgs.Remover_class(e.target,"ButtonsAtivado");
        fgs.Adicionar_class(e.target,"Buttons_Edit");
        fgs.new_text(e.target, "Ativar Deslocamento pelo Click");
        Deslocar_obj.permissao_deslocamento = false;
        alterarClickTransistor2();
    
    }

}

fgs.$("#AtivarDeslocamentoMouse").onclick = (e) => {

    console.log("onclick_ativarDeslocamento está sendo executada")

    if(Deslocar_obj_2.permissao_deslocamento === false) {

        Deslocar_obj_2.permissao_deslocamento = true; 
        //fgs.Remover_class(e.target,"buttonsFalse");
        //fgs.Adicionar_class(e.target,"buttonsTrue");
        fgs.Remover_class(e.target,"Buttons_Edit");
        fgs.Adicionar_class(e.target,"ButtonsAtivado");
        fgs.new_text(e.target, "Desativar Deslocamento pelo Mouse");
        deslocar_mouse_1();
        alterarClickTransistor2();
    
    } else { 

        //fgs.Remover_class(e.target,"buttonsTrue");
        //fgs.Adicionar_class(e.target,"buttonsFalse");
        fgs.Remover_class(e.target,"ButtonsAtivado");
        fgs.Adicionar_class(e.target,"Buttons_Edit");
        fgs.new_text(e.target, "Ativar Deslocamento pelo Mouse");
        Deslocar_obj_2.permissao_deslocamento = false;
        deslocar_mouse_2();
        alterarClickTransistor1();

    }

}