// 🟦 class 에 대해서 

// [특징]
    // class는 ES6 부터 지원 
    // class 를 사용하면 '상속' 을 지원한다. 
    // '코드 재사용' 을 높일 수 있다. 


    // // 생성자 함수만들 때 '초록색' 으로 변함
    // function aa () {
    //     this.name = name;
    // }
    


    // 클래스의 생성자 함수
    class student {

        // 클래스의 생성자 함수가 constructor
            // 클래스에는 이미 있다. 
            // 이걸 작성 안 하고 만든다고 하면, 빈 constructor 가 생긴다. 
            // 빈 생성자 함수가 생긴다. 
        constructor(age, phone, city) {
            this.age = age;
            this.phone = phone;
            this.city = city;
        }

        // 함수의 이름만 쓰면 됨. 
        getInfo() {
            return "나이는 : " + this.age + "살 임. 핸드폰 번호는 " + this.phone + "사는 곳 : " + this.city + "임"
        }

    }

    let st = new student(30, 30, "seoul");
    console.log(st); 
        // 생성자 함수로 객체 만드는 것과 동일 
        // 객체를 만들었으니까, ⭐'접근법'⭐ 도 동일 ⭐⭐⭐ 
    console.log(st.age)
    console.log(st.getInfo()); 
        // 객체니까, 사용법은 동일! ⭐⭐⭐ 

    

// 🟦 생성함수와 차이점은? 

    class Character {
        constructor(hp, mp, atk) {
            this.hp = hp;
            this.mp = mp; 
            this.atk = atk;
        }

        getState() {
            return this.hp + this.mp + this.atk;
        }
        // 정적 메소드 : 일반적으로 공용함수를 만들기 위해 사용
        // 클래스의 인스턴스에서 호출하지 않음. 
        // 정적 메소드를 만들어놓으면, 


        // static 선언한 메소드는 '클래스를 동적할당' 할 때 마다, '생성되지 않는다.' 
        // '한개' 만 있음. 
        // 클래스를 '동적할당' 해도 생기지 않음. ❓❓❓❓❓  
        
        // 인스턴스를 생성할 때, 더 생성되지 않는다. 
        static getAtk(n) {
            return n.atk;
        }
    }

    let ca = new Character(100,100,100);
    console.log(ca);
    // console.log(ca.getAtk(1)); 
        // 정적 메소드 보기!!!
        // 정적메소드라서, 인스턴스에서 불러오지 못 해 
        // 생성한 인스턴스 안에서 호출하면 안 돼!!!

    console.log(Character(getAtk(ca)))
        // 선언한 클래스 안에서 '호출' 해야 함. 
        // 동적 할 당할 때는 1) getState 가 호출되는데, 2) getAtk 는 한 개 만 된다. 
        // 클래스에서 사용할 공용 메소드를 정적으로 만든다. ❓❓❓❓❓❓ 


    class Product {
        constructor(name, price) {          // 생성자 함수 만들고 시작하자
            this.name = name;
            this.price = price;

        }

        // class 에서는 getter 와 setter 
            // get 은 가져온다. 값을 가져올 때 네이밍
            // set 은 값을 수정할 때 네이밍
            // 클래스의 프로퍼티값을 가져오거나, 설정할 때, getter 와 setter 를 제공해줌.
            // 클래스의 값에 접근할 때, 직접 변수에 접근하는 형태가 아닌, get과 set 을 통한 접근 방법 ⭐⭐⭐
            // 내부 구조를 '캡슐화' 하는데 좋다. 
                // '캡슐화' 라는 건, 객체로 만들어서 
                // '전역변수' 처럼 쓰이지 않게. 데이터가 전역적으로 쓰이지 않게, 위험성을 방지. 
                // '캡슐화' 는 '객체지향' 

        get getName() {
            return "제품이름 : " + this.name;
        }

        set setPrice(price) {
            this.price = price
        }        
    }
    
    
    let pr = new Product("갤럭시 노트" , 1000000);
    console.log(pr)

    // getter 를 확인해보자
    console.log(pr.getName)

    // setter 를 확인하자 
    pr.setPrice = 2000 ;
    console.log(pr);


    // 🤟 [생성자 함수 vs constructor 의 차이]
        // 따라서, 생성자 함수와 constructor는 비슷한 개념이지만, 
        // 생성자 함수는 함수를 사용하여 객체를 생성하는 데 사용되고, constructor는 클래스에서 생성자 메서드를 지칭하는 용어입니다.
