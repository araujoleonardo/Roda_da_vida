$(document).ready(() => {
    salvarDados()

    function salvarDados() {
        //$("#quiz1, #quiz2, #quiz3, #quiz4, #resultado").hide()

        class areasVidas {
            constructor(area, nota) {
                this.area = area
                this.nota = nota
            }
        }

        // ******************************************* AREA HOME *******************************************
        $("#btn0").click(() => {
            window.open('quiz1.html', "_self")
        })


        // ******************************************* AREA RECUPERAR DADOS *******************************************
        $("#btn1").click(() => {
            if(document.querySelector("input[name='ad_1']:checked") === null || 
               document.querySelector("input[name='ad_2']:checked") === null ||
               document.querySelector("input[name='ad_3']:checked") === null ||
               document.querySelector("input[name='ad_4']:checked") === null ||
               document.querySelector("input[name='ad_5']:checked") === null ||
               document.querySelector("input[name='ad_6']:checked") === null ||
               document.querySelector("input[name='ad_7']:checked") === null ||
               document.querySelector("input[name='ad_8']:checked") === null ||
               document.querySelector("input[name='ad_9']:checked") === null
            ){
                alert('Você deve escolher um valor!')
            } else {

                let ad_1 = document.querySelector("input[name='ad_1']:checked").value
                let ad_2 = document.querySelector("input[name='ad_2']:checked").value
                let ad_3 = document.querySelector("input[name='ad_3']:checked").value
                let ad_4 = document.querySelector("input[name='ad_4']:checked").value
                let ad_5 = document.querySelector("input[name='ad_5']:checked").value
                let ad_6 = document.querySelector("input[name='ad_6']:checked").value
                let ad_7 = document.querySelector("input[name='ad_7']:checked").value
                let ad_8 = document.querySelector("input[name='ad_8']:checked").value
                let ad_9 = document.querySelector("input[name='ad_9']:checked").value

                ad_1 = parseInt(ad_1)
                ad_2 = parseInt(ad_2)
                ad_3 = parseInt(ad_3)
                ad_4 = parseInt(ad_4)
                ad_5 = parseInt(ad_5)
                ad_6 = parseInt(ad_6)
                ad_7 = parseInt(ad_7)
                ad_8 = parseInt(ad_8)
                ad_9 = parseInt(ad_9)

                mediaHE = (ad_1 + ad_2 + ad_3) / 3
                console.log(mediaHE)

                mediaNL = (ad_4 + ad_5 + ad_6) / 3
                console.log(mediaNL)

                mediaEHE = (ad_7 + ad_8 + ad_8) / 3
                console.log(mediaEHE)

                // salvando no logalStorage
                let salvarHE = new areasVidas(0, Math.round(mediaHE))
                let salvandoHE = JSON.stringify(salvarHE)
                localStorage.setItem("habilidadesEcompetencias", salvandoHE)

                let salvarNL = new areasVidas(1, Math.round(mediaNL))
                let salvandoNL = JSON.stringify(salvarNL)
                localStorage.setItem("nivelamento", salvandoNL)

                let salvarEHE = new areasVidas(2, Math.round(mediaEHE))
                let salvandoEHE = JSON.stringify(salvarEHE)
                localStorage.setItem("estHabitoEstudo", salvandoEHE)

                window.open('quiz2.html', "_self")
            }
        })

        // ******************************************* AREA SAÚDE INTEGRAL *******************************************
        $("#btn2").click(() => {
            if(document.querySelector("input[name='si_1']:checked") === null || 
               document.querySelector("input[name='si_2']:checked") === null ||
               document.querySelector("input[name='si_3']:checked") === null ||
               document.querySelector("input[name='si_4']:checked") === null ||
               document.querySelector("input[name='si_5']:checked") === null ||
               document.querySelector("input[name='si_6']:checked") === null ||
               document.querySelector("input[name='si_7']:checked") === null ||
               document.querySelector("input[name='si_8']:checked") === null ||
               document.querySelector("input[name='si_9']:checked") === null
            ){
                alert('Você deve escolher um valor!')
            } else {

                let si_1 = document.querySelector("input[name='si_1']:checked").value
                let si_2 = document.querySelector("input[name='si_2']:checked").value
                let si_3 = document.querySelector("input[name='si_3']:checked").value
                let si_4 = document.querySelector("input[name='si_4']:checked").value
                let si_5 = document.querySelector("input[name='si_5']:checked").value
                let si_6 = document.querySelector("input[name='si_6']:checked").value
                let si_7 = document.querySelector("input[name='si_7']:checked").value
                let si_8 = document.querySelector("input[name='si_8']:checked").value
                let si_9 = document.querySelector("input[name='si_9']:checked").value
                si_1 = parseInt(si_1)
                si_2 = parseInt(si_2)
                si_3 = parseInt(si_3)
                si_4 = parseInt(si_4)
                si_5 = parseInt(si_5)
                si_6 = parseInt(si_6)
                si_7 = parseInt(si_7)
                si_8 = parseInt(si_8)
                si_9 = parseInt(si_9)

                mediaSF = (si_1 + si_2 + si_3) / 3
                console.log(mediaSF)

                mediaSM = (si_4 + si_5 + si_6) / 3
                console.log(mediaSM)

                mediaBE = (si_7 + si_8 + si_9) / 3
                console.log(mediaBE)

                // salvando no logalStorage
                let salvarSF = new areasVidas(3, Math.round(mediaSF))
                let salvandoSF = JSON.stringify(salvarSF)
                localStorage.setItem("saudeFisica", salvandoSF)

                let salvarSM = new areasVidas(4, Math.round(mediaSM))
                let salvandoSM = JSON.stringify(salvarSM)
                localStorage.setItem("saudeMental", salvandoSM)

                let salvarBE = new areasVidas(5, Math.round(mediaBE))
                let salvandoBE = JSON.stringify(salvarBE)
                localStorage.setItem("bemEstar", salvandoBE)

                window.open('quiz3.html', "_self")
            }
        })

        // ******************************************* AREA INCLUSÃO E DIVERSIDADE HUMANA *******************************************
        $("#btn3").click(() => {
            if(document.querySelector("input[name='dh_1']:checked") === null || 
               document.querySelector("input[name='dh_2']:checked") === null ||
               document.querySelector("input[name='dh_3']:checked") === null ||
               document.querySelector("input[name='dh_4']:checked") === null ||
               document.querySelector("input[name='dh_5']:checked") === null ||
               document.querySelector("input[name='dh_6']:checked") === null ||
               document.querySelector("input[name='dh_7']:checked") === null ||
               document.querySelector("input[name='dh_8']:checked") === null ||
               document.querySelector("input[name='dh_9']:checked") === null
            ){
                alert('Você deve escolher um valor!')
            } else {

                let dh_1 = document.querySelector("input[name='dh_1']:checked").value
                let dh_2 = document.querySelector("input[name='dh_2']:checked").value
                let dh_3 = document.querySelector("input[name='dh_3']:checked").value
                let dh_4 = document.querySelector("input[name='dh_4']:checked").value
                let dh_5 = document.querySelector("input[name='dh_5']:checked").value
                let dh_6 = document.querySelector("input[name='dh_6']:checked").value
                let dh_7 = document.querySelector("input[name='dh_7']:checked").value
                let dh_8 = document.querySelector("input[name='dh_8']:checked").value
                let dh_9 = document.querySelector("input[name='dh_9']:checked").value
                dh_1 = parseInt(dh_1)
                dh_2 = parseInt(dh_2)
                dh_3 = parseInt(dh_3)
                dh_4 = parseInt(dh_4)
                dh_5 = parseInt(dh_5)
                dh_6 = parseInt(dh_6)
                dh_7 = parseInt(dh_7)
                dh_8 = parseInt(dh_8)
                dh_9 = parseInt(dh_9)

                mediaEQ = (dh_1 + dh_2 + dh_3) / 3
                console.log(mediaEQ)

                mediaIT = (dh_4 + dh_5 + dh_6) / 3
                console.log(mediaIT)

                mediaAA = (dh_7 + dh_8 + dh_9) / 3
                console.log(mediaAA)

                // salvando no logalStorage
                let salvarEQ = new areasVidas(6, Math.round(mediaEQ))
                let salvandoEQ = JSON.stringify(salvarEQ)
                localStorage.setItem("equidade", salvandoEQ)

                let salvarIT = new areasVidas(7, Math.round(mediaIT))
                let salvandoIT = JSON.stringify(salvarIT)
                localStorage.setItem("integracao", salvandoIT)

                let salvarAA = new areasVidas(8, Math.round(mediaAA))
                let salvandoAA = JSON.stringify(salvarAA)
                localStorage.setItem("acessibilidadeAutonomia", salvandoAA)

                window.open('quiz4.html', "_self")
            }
        })

        // ******************************************* AREA SAÚDE FISICA *******************************************
        $("#btn4").click(() => {
            if(document.querySelector("input[name='gd_1']:checked") === null || 
               document.querySelector("input[name='gd_2']:checked") === null ||
               document.querySelector("input[name='gd_3']:checked") === null ||
               document.querySelector("input[name='gd_4']:checked") === null ||
               document.querySelector("input[name='gd_5']:checked") === null ||
               document.querySelector("input[name='gd_6']:checked") === null ||
               document.querySelector("input[name='gd_7']:checked") === null ||
               document.querySelector("input[name='gd_8']:checked") === null ||
               document.querySelector("input[name='gd_9']:checked") === null
            ){
                alert('Você deve escolher um valor!')
            } else {

                let gd_1 = document.querySelector("input[name='gd_1']:checked").value
                let gd_2 = document.querySelector("input[name='gd_2']:checked").value
                let gd_3 = document.querySelector("input[name='gd_3']:checked").value
                let gd_4 = document.querySelector("input[name='gd_4']:checked").value
                let gd_5 = document.querySelector("input[name='gd_5']:checked").value
                let gd_6 = document.querySelector("input[name='gd_6']:checked").value
                let gd_7 = document.querySelector("input[name='gd_7']:checked").value
                let gd_8 = document.querySelector("input[name='gd_8']:checked").value
                let gd_9 = document.querySelector("input[name='gd_9']:checked").value
                gd_1 = parseInt(gd_1)
                gd_2 = parseInt(gd_2)
                gd_3 = parseInt(gd_3)
                gd_4 = parseInt(gd_4)
                gd_5 = parseInt(gd_5)
                gd_6 = parseInt(gd_6)
                gd_7 = parseInt(gd_7)
                gd_8 = parseInt(gd_8)
                gd_9 = parseInt(gd_9)

                mediaPI = (gd_1 + gd_2 + gd_3) / 3
                console.log(mediaPI)

                mediaRS = (gd_4 + gd_5 + gd_6) / 3
                console.log(mediaRS)

                mediaCC = (gd_7 + gd_8 + gd_9) / 3
                console.log(mediaCC)

                // salvando no logalStorage
                let salvarPI = new areasVidas(9, Math.round(mediaPI))
                let salvandoPI = JSON.stringify(salvarPI)
                localStorage.setItem("protecaoIntegral", salvandoPI)

                let salvarRS = new areasVidas(10, Math.round(mediaRS))
                let salvandoRS = JSON.stringify(salvarRS)
                localStorage.setItem("responsabilidadeSocial", salvandoRS)

                let salvarCC = new areasVidas(11, Math.round(mediaCC))
                let salvandoCC = JSON.stringify(salvarCC)
                localStorage.setItem("cidadaniaConvivencia", salvandoCC)

                window.open('grafico.html', "_self")
            }
        })


        $("button.btn-info").click(() => {
            window.scroll(0, 0)
        })
    }
})