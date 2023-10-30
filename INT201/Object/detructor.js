const book = {isbn:'123456789' , 
              title: 'introduction to js' ,
              author : { fristname: 'Adum' , lastname : 'Lee'
                } ,
              publisher : {
                    name : 'Lodchong',
                    location : {
                        name:'Silicon' , country: 'USA'
                    }
                }
             }
            const {title} = book   //aqually to const title = book.title
            console.log(title); //introduction to js

            //เปลี่ยนชื่อ
            const {publisher: publisherName , isbn:isbn_book }=book
            console.log(publisherName);  // ตัวแปรอิสระ ไม่ผูกติดกับ book
            console.log(isbn_book);

            const { publisher :{location} } = book
            console.log(location);

            const {publisher :{
                location:{country:NameCountry}  //country เปลี่ยนชื่อเป็ร NameCountry
            }} = book
            console.log(NameCountry);

            /* const {title} = book   ,
               const {publisher :{ location } } = book ,  
               const {publisher :{ location: { country } } } = book   */