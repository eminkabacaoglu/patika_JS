<?php

function ucgen($sayi) {

    for($i=1;$i<=$sayi+1;$i++){  
        for($j=1;$j<=$i;$j++){  
            echo "o ";  
            }  
    echo "<br>";  
    }  
}

ucgen(15);

