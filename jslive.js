function Alert()
{
    document.body.style.background = "#f92307 url('img_tree.png') no-repeat right top";


    var parent = document.getElementById("div");

    var child= document.getElementById("div1");

    parent.removeChild(child);

    var parent1 = document.getElementById("div2");

    var child1= document.getElementById("live1");

    parent.removeChild(child1);

    var para1 = document.createElement("div");

    var para = document.createElement("h1");

    var node = document.createTextNode(" ALERT ");


    parent.appendChild(para);

    para.appendChild(para1);
    para1.appendChild(node);



    var para2 = document.createElement("h5");

    var node2 = document.createTextNode(" problem happent at room S7 section 5 atpoint (3,5) , (12.8) , (48,4) ");
    para1.appendChild(para2);
    para2.appendChild(node2);

    var para4 = document.createElement("h6");
    var node4 = document.createTextNode(" starting auto detiction prossis ");
    para1.appendChild(para4);
    para4.appendChild(node4);
    var para5 = document.createElement("h6");
    var node5 = document.createTextNode(" expicted time to end detiction : 00:38:15 ");
    para1.appendChild(para5);
    para5.appendChild(node5);

    var para3 = document.createElement("h6");
    var node3 = document.createTextNode(" Excpicted Damage  : ");
    para1.appendChild(para3);
    para3.appendChild(node3);

        var para6 = document.createElement("h6");
    var node6 = document.createTextNode(" shelld  :  14.5% ");
    para1.appendChild(para6);
    para6.appendChild(node6);

    var para7 = document.createElement("h6");
    var node7 = document.createTextNode(" human   :  1.02% ");
    para1.appendChild(para7);
    para7.appendChild(node7);

        var para8 = document.createElement("h6");
    var node8 = document.createTextNode(" electric losing   :  5.1% ");
    para1.appendChild(para8);
    para8.appendChild(node8);

}
