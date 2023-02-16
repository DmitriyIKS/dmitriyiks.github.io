var canvas, ctx, flag = false,
            prevX = 0,
            currX = 0,
            prevY = 0,
            currY = 0,
            s = 1,
            txt = [''],
            dot_flag = false;
            
        var x = "black",
            y = 2;
        
        function init() {
            canvas = document.getElementById('can');
            ctx = canvas.getContext("2d");
            w = canvas.width;
            h = canvas.height;
        
            canvas.addEventListener("mousemove", function (e) {
                findxy('move', e)
            }, false);
            canvas.addEventListener("mousedown", function (e) {
                findxy('down', e)
            }, false);
            canvas.addEventListener("mouseup", function (e) {
                findxy('up', e)
            }, false);
            canvas.addEventListener("mouseout", function (e) {
                findxy('out', e)
            }, false);
        }
        
        function color() {
            x = document.querySelector(".clrDrw").value;
            
        }
        function eraser() {
            x = "#FFFFFF";
            
        }
        
        function switTxt() {
            s = 0;
            txt = prompt();
        }

        function switDraw() {
            s = 1;
        }

        function switFillD() {
            s = 3;
        }

        function fillD() {
            ctx.fillStyle = x;
            ctx.fill();    
        }

        function switDrawC() {
            s = 4;
        }
        
        function drawC() {
            ctx.beginPath();
            y = document.querySelector('.range').value;
            ctx.arc(currX, currY, y, 1, Math.PI * 2, false);
            ctx.fillStyle = x;
            ctx.strokeStyle = x;
            ctx.fill();
            ctx.closePath();
            ctx.stroke();
        }

        function text() {    
            y = document.querySelector('.range').value;
            ctx.fillStyle = x;
            ctx.strokeStyle = x;
            ctx.font = `bold ${(y)}pt Arial`;
            ctx.fillText(`${txt}`, currX, currY);
            //ctx.font = `italica ${y+2}px sans-serif`;
            //ctx.strokeText(`${txt}`, prevX, prevY);
        }

        function draw() {
            //ctx.beginPath();
            //ctx.moveTo(currX, currY);
            ctx.lineTo(prevX, prevY);
            ctx.strokeStyle = x;
            y = document.querySelector('.range').value;
            ctx.lineWidth = y;
            ctx.stroke();
            //ctx.closePath();
        }
        
        function erase() {
            var m = confirm("Want to clear");
            if (m) {
                ctx.clearRect(0, 0, w, h);
                document.getElementById("canvasimg").style.display = "none";
            }
        
        
        }
        
        function save() {
            document.getElementById("canvasimg").style.border = "2px solid";
            var dataURL = canvas.toDataURL();
            document.getElementById("canvasimg").src = dataURL;
            document.getElementById("canvasimg").display = "inline";
            canvas.toBlob(function(blob) {
                saveAs(blob, "pretty image.png");
            });
        }
        
        function findxy(res, e) {
            if (res == 'down') {
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.offsetLeft;
                currY = e.clientY - canvas.offsetTop;
        
                flag = true;
                dot_flag = true;
                if (dot_flag, s == 1) {
                    
                        ctx.beginPath();
                        ctx.fillStyle = x;
                        y = document.querySelector('.range').value;
                        ctx.fillRect(currX, currY, y, y);
                        ctx.closePath();
                        dot_flag = false;
                    
                } if (s == 0) {
                    text();
                } if (s == 3) {
                    fillD();
                }
            }
            if (res == 'up' || res == "out") {
                flag = false;
            }
            if (res == 'move') {
                if (flag) {
                    prevX = currX;
                    prevY = currY;
                    currX = e.clientX - canvas.offsetLeft;
                    currY = e.clientY - canvas.offsetTop;
                    if (s == 1) {
                        draw();
                        console.log(s);
                    } if (s == 0) {
                        text();
                        console.log(s); 
                    } if (s == 4) {
                        drawC();
                        console.log(s);
                    }
                    
                }
            }
        }
        