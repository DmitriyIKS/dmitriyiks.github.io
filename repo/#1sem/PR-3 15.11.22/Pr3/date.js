



   var dateFormaten = function () {
    var    token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormaten;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var    _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d:    d,
                dd:   pad(d),
                ddd:  dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m:    m + 1,
                mm:   pad(m + 1),
                mmm:  dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy:   String(y).slice(2),
                yyyy: y,
                h:    H % 12 || 12,
                hh:   pad(H % 12 || 12),
                H:    H,
                HH:   pad(H),
                M:    M,
                MM:   pad(M),
                s:    s,
                ss:   pad(s),
                l:    pad(L, 3),
                L:    pad(L > 99 ? Math.round(L / 10) : L),
                t:    H < 12 ? "a"  : "p",
                tt:   H < 12 ? "am" : "pm",
                T:    H < 12 ? "A"  : "P",
                TT:   H < 12 ? "AM" : "PM",
                Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormaten.masks = {
    "default":      "ddd mmm dd yyyy HH:MM:ss",
    shortDate:      "m/d/yy",
    mediumDate:     "mmm d, yyyy",
    longDate:       "mmmm d, yyyy",
    fullDate:       "dddd, mmmm d, yyyy",
    shortTime:      "h:MM TT",
    mediumTime:     "h:MM:ss TT",
    longTime:       "h:MM:ss TT Z",
    isoDate:        "yyyy-mm-dd",
    isoTime:        "HH:MM:ss",
    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormaten.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};

// For convenience...
Date.prototype.formaten = function (mask, utc) {
    return dateFormaten(this, mask, utc);
};









function DifferenceCounter(){

String.prototype.replaceAt=function(index, replacement) {
 return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}


   var dat1 = document.form.date1.value.split('/').join(',').split('.').join(',').split(/[-,]+/).join(',').split(/[ ,]+/);
 var dates1 = dat1.splice(0,1,dat1[1]);
 var datess1 = dat1.splice(1,1,dates1);
dat1 = dat1.toString().replace(/,/g, "-");
dat1 = dat1.substring(6, 11)+dat1.substring(0, 3)+dat1.substring(3, 5) +"T"+ dat1.substring(11)+"Z";

 var dat2 = document.form.date2.value.split('/').join(',').split('.').join(',').split(/[-,]+/).join(',').split(/[ ,]+/);
 var dates2 = dat2.splice(0,1,dat2[1]);
 var datess2 = dat2.splice(1,1,dates2);
dat2 = dat2.toString().replace(/,/g, "-");
dat2 = dat2.substring(6, 11)+dat2.substring(0, 3)+dat2.substring(3, 5) +"T"+ dat2.substring(11)+"Z";

//  var dated1 = new Date(date1.formaten("dd/mm/yyyy"));
//  var dated2 = new Date(date2.formaten("dd/mm/yyyy"));

 var date1 = new Date(dat1);
 var date2 = new Date(dat2);
if (document.form.enddate.checked)
{ 
date2.setDate(date2.getDate() + 1);
}
 var dated1 = new Date(date1.formaten("dd/mm/yyyy"));
 var dated2 = new Date(date2.formaten("dd/mm/yyyy"));






   var sec = (date2.getTime()/1000.0) - (date1.getTime()/1000.0);

 a= "<table>";
 a+= "<tr><td colspan=2>Временная разница составляет:</td></tr><tr id=my_color><td colspan=2>"+TimeDifferenceCounter(sec)+"</td></tr>";
 a+= "<tr><td width=220>Разница в секундах: </td><td id=my_color align=right>"+Math.round(sec)+"</td></tr>";
 a+= "<tr><td>Разница в минутах:</td><td id=my_color align=right>"+Math.round(sec/60)+"</td></tr>";
 a+= "<tr><td>Разница в часах:</td><td id=my_color align=right>"+Math.round(sec/60/60)+"</td></tr>";
 a+= "<tr><td>Разница в днях:</td><td id=my_color align=right>"+Math.round(sec/60/60/24)+"</td></tr>";
 a+= "<tr><td>Разница в месяцах:</td><td id=my_color align=right>"+Math.round(sec/2629743)+"</td></tr>";
 a+= "<tr><td>Разница в годах:</td><td  id=my_color align=right>"+Math.round(sec/31556926)+"</td></tr>";
 a+= "</table>";
 document.getElementById('output').innerHTML = a;
}

function TimeDifferenceCounter(sec){
 var t = parseInt(sec);
 var years;var months;var days;
/*	if(t>31556926){
     years = parseInt(t/31556926); t = t-(years*31556926);
 }
 if(t>2629743){
     months = parseInt(t/2629743); t = t-(months*2629743);
 } */
 if(t>86400){
     days = parseInt(t/86400); t = t-(days*86400);
 }
 var hours = parseInt(t/3600);
 t = t-(hours*3600);
 var minutes = parseInt(t/60);
 t = t-(minutes*60);
 var content = "";
 if(years)content+=years+" Год(а)";
 if(months){ if(content)content+=", "; content+=months+" Месяцев(а)"; }
 if(days){ if(content)content+=", ";  content+=days+" Дней(я)"; }
 if(hours||days){ if(content)content+=",<br>"; content+=hours+" Часов(а)"; }
 if(content)content+=", "; content+=minutes+" Минут(ы) "+t+" Секунд(ы)";
 return content;
}

