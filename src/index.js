function registerNow() {
                let name = prompt("What is your name?");
                let age = prompt("What is your age");
                if (age < 18) {
                    alert("Sorry "+ name + " you can't join Books&Wine club.");
                } else {
                    let email = prompt("What is your email address?")
                
                    let header = document.querySelector("header");
                    header.innerHTML = "Hello " + name + "👋 Welcome to Books&Wine! <br />We'll be in touch soon...";
                }


                
            }

            let registerNowButton = document.querySelector("button")
            registerNowButton.addEventListener("click", registerNow);