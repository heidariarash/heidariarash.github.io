/*************************************
             Preloader
*************************************/
$(window).on('load', function() {
    $('#status').delay(500).fadeOut();
    $('#preloader').delay(500).fadeOut();
});

/*************************************
           Responsive Tabs
*************************************/
$(function () {
    $("#skills-tabs").responsiveTabs({
        animation: 'slide'
    });
    $(".r-tabs-accordion-title").parent().addClass("text-center");
});

/*************************************
             Navigation
*************************************/
$(function() {
    if (($(window).scrollTop() > 200) || ($(window).width() < 975)) {
        $("nav").addClass("nav-back");
    }
    else {
        $("nav").removeClass("nav-back");
    }

    $(window).scroll(function() {
        if (($(window).scrollTop() > 200) || ($(window).width() < 975)) {
            $("nav").addClass("nav-back");
        }
        else {
            $("nav").removeClass("nav-back");
        }
    })

    $(window).resize(function() {
        if (($(window).scrollTop() > 200) || ($(window).width() < 975)) {
            $("nav").addClass("nav-back");
        }
        else {
            $("nav").removeClass("nav-back");
        }
    })
})

$(function() {
    $(".smooth-class").click(function(event) {
        event.preventDefault();
        const section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 1250)
    })
})

/*************************************
           Skills Buttons
*************************************/
const activeClassInSkills = (id, context) =>  {
    if ($('#' + id).parent().hasClass("skill-" + context + "-active-button")) return;
    $(".skill-" + context + "-active-button").removeClass("skill-" + context + "-active-button")
    $('#' + id).parent().addClass("skill-" + context + "-active-button");
};

const changeInformationSkill = (context, header, info, items=[]) => {
    $('#' + context + ' h4').text(header);
    $('#' + context + ' p').text(info);
    itemUl = document.querySelector(`#${context} ul`);
    itemUl.innerText = "";
    for (item of items) {
        itemLi = document.createElement("li");
        emTag = document.createElement("em");
        itemLi.appendChild(emTag);
        emTag.innerText = item;
        itemUl.appendChild(itemLi);
    }
}

$('#btn-skill-electronics-micro').on('click', function(){
    activeClassInSkills('btn-skill-electronics-micro', "electronics");
    const header = "Mikrocontroller";
    const info = "Ich habe ein solides Verständnis für die Hardware und Funktionalität von Mikrocontrollern. Neben der Bare-Metal-C- oder C ++ - Programmierung habe ich Erfahrung mit anderen Tools wie FreeRTOS in ARM- und ESP8266-Mikrocontrollern.";
    const items = ["ARM", "AVR / PIC / Arduino", "FreeRTOS"];
    changeInformationSkill('skill-electronics-information', header, info, items);
});

$('#btn-skill-electronics-pcb').on('click', function(){
    activeClassInSkills('btn-skill-electronics-pcb', "electronics");
    const header = "Leiterplatten-Design";
    const info = "Ich bin mit Altium Designer als PCB-Design-Tool ziemlich vertraut. Ich bin in der Lage, Schemata und Footprints für verschiedene Elemente in dieser Software zu entwerfen, den endgültigen Schaltplan zu zeichnen und die Leiterplatte selbst mithilfe dieser Software zu entwerfen.";
    const items = ["Altium Desinger"];
    changeInformationSkill('skill-electronics-information', header, info, items);
});

$('#btn-skill-electronics-iot').on('click', function(){
    activeClassInSkills('btn-skill-electronics-iot', "electronics");
    const header = "Internet der Dinge";
    const info = "Ich habe einige IoT-basierte Projekte mit ESP8266, Arduino und Raspberry Pi durchgeführt. Mir sind IoT-Protokolle wie ZigBee, WiFi, Bluetooth usw. bekannt.";
    const items = ["Raspberry Pi", "Arduino / ESP8266", "Bluetooth / Zigbee / Wifi / ..."];
    changeInformationSkill('skill-electronics-information', header, info, items);
});

$('#btn-skill-electronics-fpga').on('click', function(){
    activeClassInSkills('btn-skill-electronics-fpga', "electronics");
    const header = "FPGA";
    const info = "Ich bin aufgrund fehlender Projekte kein erfahrener FPGA-Entwickler, aber ich kenne Verilog und VHDL.";
    const items = ["VHDL", "Verilog"];
    changeInformationSkill('skill-electronics-information', header, info, items);
});

$('#btn-skill-ml-ml').on('click', function(){
    activeClassInSkills('btn-skill-ml-ml', "ml");
    const header = "Maschinelles Lernen";
    const info = "Ich mag künstliche Intelligenz sehr gern. Daher habe ich die verwandten Algorithmen studiert, um ein Meister in diesem Bereich zu werden. Computer Vision, bestärkenden Lernen, GANs und Verarbeitung natürlicher Sprache sind die Hauptthemen, über die ich in den letzten Jahren studiert habe. Ich habe auch die Erfahrung, Studenten einige dieser Algorithmen beizubringen.";
    const items = ["Sci-Kit Learn / Spark MLlib", "TensorFlow / PyTorch / Keras", "OpenCV", "NLTK / spaCy"];
    changeInformationSkill('skill-ml-information', header, info, items);
});

$('#btn-skill-ml-web').on('click', function(){
    activeClassInSkills('btn-skill-ml-web', "ml");
    const header = "Web Crawling";
    const info = "Da ich zuvor HTML / CSS-Kenntnisse hatte, war das Erlernen des Web-Crawlings für mich keine große Anstrengung. Ich kann Scrapy, Selenium und Beautiful Soup verwenden, um Informationen von verschiedenen Websites zu extrahieren.";
    const items = ["Scrapy", "Selenium", "Beautiful Soup"];
    changeInformationSkill('skill-ml-information', header, info, items);
});


$('#btn-skill-ml-tableau').on('click', function(){
    activeClassInSkills('btn-skill-ml-tableau', "ml");
    const header = "Data Mining und Analyse";
    const info = "Data Mining und Analyse sind zwei wichtige Schritte in der Business Intelligence. Ich kann Programmiersprachen wie Python und R und andere Tools wie Tableau verwenden, um Informationen aus Daten zu extrahieren und die Ergebnisse grafisch darzustellen.";
    const items = ["Tableau", "RapidMiner / KNIME","Pandas / Matplotlib / Seaborn / Plotly", "ggplot"]
    changeInformationSkill('skill-ml-information', header, info, items);
});

$('#btn-skill-ml-optimization').on('click', function(){
    activeClassInSkills('btn-skill-ml-optimization', "ml");
    const header = "Optimierung";
    const info = "Ich bin mit Optimierungsalgorithmen und evolutionären Algorithmen vertraut.";
    const items = ["Gradient Descent", "Particle Swarm Optimization", "Genetic Algorithm"];
    changeInformationSkill('skill-ml-information', header, info, items);
});

$('#btn-skill-programming-lang').on('click', function(){
    activeClassInSkills('btn-skill-programming-lang', "programming");
    const header = "Programmiersprachen";
    const info = "Ich kenne viele verschiedene Programmiersprachen für verschiedene Zwecke, von Coding für CLI- und GUI-Applications bis hin zum die GPU-Programmierung und Entwurf von Algorithmen für künstliche Intelligenz.";
    const items = ["Python", "C / C++ / Cuda C", "JavaScript", "R", "Matlab", "Assembly"];
    changeInformationSkill('skill-programming-information', header, info, items);
});

$('#btn-skill-programming-gui').on('click', function(){
    activeClassInSkills('btn-skill-programming-gui', "programming");
    const header = "GUI Design";
    const info = "Ich entwerfe gerne GUI für Desktop und Smartphones. Ich brauchte GUI-Programmierung, um meine IoT-Projekte mit Smartphones oder anderen eingebetteten Systemen mit Desktop zu verbinden und die Funktionalität des entwickelten Projekts visuell und ansprechender darzustellen.";
    const items = ["PyQt / Qt / QML", "TKinter", "Electron", "React Native"];
    changeInformationSkill('skill-programming-information', header, info, items);
});

$('#btn-skill-programming-web').on('click', function(){
    activeClassInSkills('btn-skill-programming-web', "programming");
    const header = "Webentwicklung";
    const info = "Bei IoT-Projekten ist es manchmal ein Muss, das entworfene System über das Internet zu steuern. Aus diesem Grund habe ich meine Webentwicklungsfähigkeiten entwickelt. Ich nenne mich nicht Full-Stack-Entwickler, aber ich habe das erforderliche Wissen, um einer zu sein. Ich habe diese Website auch selbst gestaltet.";
    const items = ["HTML / CSS / JavaScript", "Flask", "RESTful"];
    changeInformationSkill('skill-programming-information', header, info, items);
});

$('#btn-skill-programming-db').on('click', function(){
    activeClassInSkills('btn-skill-programming-db', "programming");
    const header = "Datenbank";
    const info = "Ich habe Erfahrung nich nur mit relational, sondern auch mit non-relational Datenbanken.";
    const items = ["SQL", "MongoDB"];
    changeInformationSkill('skill-programming-information', header, info, items);
});

$('#btn-skill-others-git').on('click', function(){
    activeClassInSkills('btn-skill-others-git', "others");
    const header = "DevOps Tools";
    const info = "Ich habe ein solides Verständnis von Git und wie es funktioniert. Eigentlich (wie es offensichtlich ist) habe ich meine Website auf GitHub gehostet. Ich bin auch ziemlich vertraut mit der Docker-Welt.";
    const items = ["Git", "Docker"];
    changeInformationSkill('skill-others-information', header, info, items);
});

$('#btn-skill-others-comptia').on('click', function(){
    activeClassInSkills('btn-skill-others-comptia', "others");
    const header = "Agile Softwareentwicklung";
    const info = "Ich habe kürzlich über die Agile Methodik und ihre Frameworks studiert. Meiner Meinung nach ist Agile ausgezeichnet und ich kann mich an ein Team anpassen, das diese Art von Methodik für die Entwicklung verwendet.";
    const items = ["Agile Methodik", "Scrum", "Kanban", "Jira"];
    changeInformationSkill('skill-others-information', header, info);
});

$('#btn-skill-others-linux').on('click', function(){
    activeClassInSkills('btn-skill-others-linux', "others");
    const header = "Linux";
    const info = "Da Raspberry Pi eine bestimmte Linux-Distribution verwendet, musste ich es lernen. Ich habe Erfahrung mit Ubuntu, Kali, Mint, Suse und natürlich Raspbian. Ich bin kein professioneller Terminalbenutzer, aber ich kenne die grundlegenden Befehle.";
    changeInformationSkill('skill-others-information', header, info);
});

$('#btn-skill-others-aws').on('click', function(){
    activeClassInSkills('btn-skill-others-aws', "others");
    const header = "Amazon Web Services";
    const info = "AWS ist einer der besten Cloud-Services und wird von vielen Entwicklern für viele Zwecke verwendet. Ich bin mir bewusst, dass der einzige Zweck von AWS nicht das maschinelle Lernen ist, aber ich bin hauptsächlich mit den Diensten für maschinelles Lernen vertraut.";
    const items = ["S3 / EC2 / IAM / RDS", "SageMaker / Athena / Glue / Kineses / QuickSight", "Rekongnition / Lex / Comprehend / ..."];
    changeInformationSkill('skill-others-information', header, info, items);
});

$('#btn-skill-languages-persian').on('click', function(){
    activeClassInSkills('btn-skill-languages-persian', "languages");
    const header = "Persisch";
    const info = "Persisch ist meine Muttersprache.";
    changeInformationSkill('skill-languages-information', header, info);
});

$('#btn-skill-languages-english').on('click', function(){
    activeClassInSkills('btn-skill-languages-english', "languages");
    const header = "Englisch";
    const info = "Ich betrachte mich als professionellen englischen Sprecher.";
    changeInformationSkill('skill-languages-information', header, info);
});

$('#btn-skill-languages-german').on('click', function(){
    activeClassInSkills('btn-skill-languages-german', "languages");
    const header = "Deutsch";
    const info = "Ich betrachte mich als professionellen deutschen Sprecher.";
    changeInformationSkill('skill-languages-information', header, info);
});

/*************************************
             Animation
*************************************/
$(function() {
    new WOW().init();
});

$(window).on('load', function(){
    $("#home-heading-name").addClass("animated fadeInDown");
    $("#home-heading-title").addClass("animated fadeIn");
    $(".btn-home").addClass("animated fadeInUpBig");
    $(".fa-angle-down").addClass("animated fadeInDown infinite");
});
