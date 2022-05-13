console.log("hallo")

$(document).ready(function() {
    $("#calculatebtn").click(function() {
        console.log("test")
        if(document.getElementById('SA').value == '') { document.getElementById('SA').value = 0; }
        if(document.getElementById('SA_').value == '') { document.getElementById('SA_').value = 0; }
        if(document.getElementById('SB').value == '') { document.getElementById('SB').value = 0; }
        if(document.getElementById('SB_').value == '') { document.getElementById('SB_').value = 0; }
        if(document.getElementById('AB').value == '') { document.getElementById('AB').value = 0; }
        if(document.getElementById('A_B_').value == '') { document.getElementById('A_B_').value = 0; }
        if(document.getElementById('h').value == '') { document.getElementById('h').value = 0; }
        if(document.getElementById('h_').value == '') { document.getElementById('h_').value = 0; }
        if(document.getElementById('k').value == '') { document.getElementById('k').value = 0; }
        let SA = document.getElementById('SA').value;
        let SA_ = document.getElementById('SA_').value;
        let SB = document.getElementById('SB').value;
        let SB_ = document.getElementById('SB_').value;
        let AB = document.getElementById('AB').value;
        let A_B_ = document.getElementById('A_B_').value;
        let k = document.getElementById('k').value;
        let SAF = `SA = ${SA}`;
        let SA_F = `\nSA' = ${SA_}`;
        let SBF = `\nSB = ${SB}`;
        let SB_F = `\nSB' = ${SB_}`;
        let ABF = `\nAB = ${AB}`;
        let A_B_F = `\nA_B_ = ${A_B_}`;
        let kF = `\nk = ${k}\n`;
        let kt = "\n";
        for(let i = 0; i < 69; i++) {
            Get_SA();
            Get_SB();
            Get_SA_();
            Get_SB_();
            Get_AB();
            Get_A_B_();
            Get_k();
        }
        
        document.getElementById("SA").value = Math.round(SA * 100) / 100
        document.getElementById("SA_").value = Math.round(SA_ * 100) / 100
        document.getElementById("SB").value = Math.round(SB * 100) / 100
        document.getElementById("SB_").value = Math.round(SB_ * 100) / 100
        document.getElementById("AB").value = Math.round(AB * 100) / 100
        document.getElementById("A_B_").value = Math.round(A_B_ * 100) / 100
        document.getElementById("h").value = Math.round(h * 100) / 100
        document.getElementById("h_").value = Math.round(h_ * 100) / 100
        document.getElementById("k").value = Math.round(k * 100) / 100
        document.getElementById("outputbox").value = `${SAF}${SA_F}${SBF}${SB_F}${ABF}${A_B_F}${kF}${kt}`
    
        function Get_SA() {
            if(SA == 0 && SB != 0 && SB_ != 0 && SA_ != 0) {
                SA = Math.round((SA_ * (SB / SB_)) * 100) / 100;
                SAF = `SA = SA' / (SB / SB')\nSA = ${SA_} * (${SB} / ${SB_})\nSA = ${SA}`
            }
            if(SA == 0 && SA_ != 0 && k != 0) {
                SA = Math.round((SA_ / k) * 100) / 100;
                SAF = `SA = SA' / k\nSA = ${SA_} / ${k}\nSA = ${SA}`;
            }
    
            if(SA == 0 && SA_ != 0 && AB != 0 && A_B_) {
                SA = Math.round((SA_ * (A_B_ / AB)) * 100) / 100;
                SAF = `SA = SA' * (A'B' / AB)\nSA = ${SA_} * (${A_B_} / ${AB})\nSA = ${SA}`
            }
    
            if(SA == 0 && SB != 0 && AB != 0) {
                SA = Math.round(Math.sqrt((Math.pow(SB, 2) - Math.pow(AB))) * 100) / 100;
                SAF = `SA = Wurzel aus SB² - AB²\nSA = ${SB}² - ${AB}²\nSA = ${SA}`
            }
        }
    
        function Get_SA_() {
            if(SA_ == 0 && SB_ != 0 && SB != 0 && SA != 0) {
                SA_ = Math.round((SA * (SB_ / SB)) * 100) / 100;
                SAF = `\nSA' = Sa / (SB' / SB)\nSA' = ${SA} * (${SB} / ${SB_})\nSA' = ${SA_}`;
            }
    
            if(SA_ == 0 && SA != 0 && k != 0) {
                SA_ = Math.round((SA * k) * 100) / 100;
                SA_F = `\nSA' = SA * k\nSA' = ${SA} * ${k}\nSA' = ${SA_}` 
            }
    
            if(SA_ == 0 && SA != 0 && AB != 0 && A_B_ != 0) {
                SA_ = Math.round((SA * (AB / A_B_)) * 100) / 100;
                SA_F = `\nSA' = SA * (AB / AB')\nSA' = ${SA} * (${AB} / ${A_B_})\nSA' = ${SA_}`
            }
    
            if(SA_ == 0 && A_B_ != 0 && SB_ != 0) {
                SA_ = Math.round(Math.sqrt(Math.pow(SB_, 2) - Math.pow(SA_, 2)) * 100) / 100;
                SA_F = `\nWurzel aus SA' = SB'² - SA'²\nWurzel aus SA' = ${SB_}² - ${SA_}²\nSA' = ${SA_}`
            }
        }
    
        function Get_SB() {
            if(SB == 0 && SA != 0 && SA_ != 0 && SB_ != 0) {
                SB = Math.round((SB_ * (SA / SA_)) * 100) / 100;
                SBF = `\nSB = SB' * (SA / SA')\nSB = ${SB_} * (${SA} / ${SA_})\nSB = ${SB}`;
            }
    
            if(SB == 0 && SB_ != 0 && k != 0) {
                SB = Math.round((SB_ / k) * 100) / 100;
                SBF = `\nSB = SB' / k\nSB = ${SB_} / ${k}\nSB = ${SB}`;
            }
    
            if(SB == 0 && AB != 0 && SB_ != 0 && A_B_ != 0) {
                SB = Math.round((AB * (SB_ / A_B_)) * 100) / 100;
                SBF = `\nSB = AB * (SB' / A'B')\nSB = ${AB} * (${SB_} / ${A_B_})\nSB = ${SB}`
            }
    
            if(SB == 0 && AB != 0 && SA != 0) {
                SB = Math.round(Math.sqrt(Math.pow(AB, 2) + Math.pow(SA, 2)) * 100) / 100;
                SBF = `\nSB = Wurzel aus SB = AB² + SA²\nSB = Wurzel aus ${AB}² + ${SA}²\nSB = ${SB}`
            }
        }
    
        function Get_SB_() {
            if(SB_ == 0 && SA_ != 0 && SA != 0 && SB != 0) {
                SB_ = Math.round((SB * (SA_ / SA)) * 100) / 100;
                SB_F = `\nSB' = SB * (SA' / SA)\nSB' = ${SB} * (${SA_} / ${SA})\nSB' = ${SB_}`
            }
    
            if(SB_ == 0 && SB != 0 && k != 0) {
                SB_ = Math.round((SB * k) * 100) / 100;
                SB_F = `\nSB' = SB * k\nSB' = ${SB} * ${k}\nSB' = ${SB_}`
            }
    
            if(SB_ == 0 && SB != 0 && AB != 0 && A_B_ != 0) {
                SB_ = Math.round((AB_ * (SB / AB)) * 100) / 100;
                SB_F = `\nSB' = AB * (SB / SA)\nSB' = ${AB} * (${SB} / ${SA}\nSB' = ${SB_})`
            }
    
            if(SB_ == 0 && A_B_ != 0 == SA_ != 0) {
                SB_ = Math.round(Math.sqrt(Math.pow(AB_, 2) + Math.pow(SA_, 2)) * 100) / 100;
                SB_F = `\nWurzel aus SB' = AB'² + SA'²\nSB' = Wurzel aus ${AB_}² + ${SA_}²\nSB' = ${SB_}`
            }
        }
    
        function Get_AB() {
            if(SB > SA) {
                if(AB == 0 && SB != 0 && SA != 0) {
                    AB = Math.round(Math.sqrt(SB * SB - SA * SA) * 100) / 100;
                    ABF = `\nAB = Wurzel aus SB² - SA²\nAB = Wurzel aus ${SB}² - ${SA}²\nAB = ${AB}`
                }
            } else {
                if(AB == 0 && SB != 0 && SA != 0) {
                    AB = Math.round(Math.sqrt(SA * SA - SB * SB) * 100) / 100;
                    ABF = `\nAB = Wurzel aus SA² - SB²\nAB = Wurzel aus ${SA}² - ${SB}²\nAB = ${AB}`
                }
            }
            if(AB == 0 && A_B_ != 0 && SA != 0 && SA_ != 0) {
                AB = Math.round(((A_B_ / SA_) * SA) * 100) / 100;
                ABF = `\nAB = SA * (A'B' / SA')\nAB = ${SA} * (${A_B_} / ${SA_})\nAB = ${AB}`
            }
            if(AB == 0 && A_B_ != 0 && k != 0) {
                AB = Math.round((A_B_ / k)* 100) / 100;
                ABF = `\nAB = A_B_ / k\nAB = ${A_B_} / ${k}\nAB = ${AB}`
            }
        }
    
        function Get_A_B_() {
            if(SB_ >  SA_) {
                if(A_B_ == 0 && SB_ != 0 && SA_ != 0) {
                    A_B_ = Math.round(Math.sqrt(SB_ * SB_ - SA_ * SA_)* 100) / 100;
                    A_B_F = `\nA'B' = Wurzel aus SB'² - SA'²\nAB' = Wurzel aus ${SB_}² - ${SA_}²\nAB' = ${A_B_}`
                }
            } else {
                if(A_B_ == 0 && SB_ != 0 && SA_ != 0) {
                    A_B_ = Math.round(Math.sqrt(SA_ * SA_ - SB_ * SB_)* 100) / 100;
                    A_B_F = `\nA'B' = Wurzel aus SB'² - SA'²\nAB' = Wurzel aus ${SA_}² - ${SB_}²\nAB' = ${A_B_}`
                }
            }
            if(A_B_ == 0 && SA_ != 0 && AB != 0 && SA != 0) {
                A_B_ = Math.round((AB * (SA_)) / SA)
                A_B_F = `\nA'B' = SA' * (AB / SA)\nA'B' = ${SA_} * (${AB} / ${SA})\nA'B' = ${A_B_}`
            }
            if(A_B_ == 0 && AB != 0 && k != 0) {
                A_B_ = Math.round((AB * k) * 100) / 100;
                A_B_F = `\nA'B' = AB * k\nA'B' = ${AB} * ${k}\nA'B' = ${A_B_}`;
            }
        }
        
        /*function Get_h() {
            if(h == 0 && )
        }*/

        function Get_k() {
            if(k == 0 && SB != 0 && SB_ != 0) {
                k = Math.round((SB_ / SB) * 100) / 100;
                kF = `\nk = ${k}`;
                if(k != 0 && SA != 0 && SA_ != 0) {
                    if(k == Math.round((SA_ / SA) * 100) / 100) {
                        kt = "\n++";
                    }
                }
            }
    
            if(k == 0 && SA != 0 && SA_ != 0) {
                k = Math.round((SA_ / SA) * 100) / 100;
                kF = `\nk = ${k}`;
                if(k != 0 && SB != 0 && SB_ != 0) {
                    if(k == Math.round((SB_ / SB) * 100) / 100) {
                        kt = "\n++"
                    }
                }
            }
        }
    })
});