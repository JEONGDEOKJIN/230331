

class Mother {

    // constructor 생성자 함수로 객체 만들기
    constructor(name, age) { 
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return console.log(`이름은 ${this.name} 나이는 : ${this.age} 입니다.`)
    }
}

let temp = new Mother("아무개", 30);
temp.getInfo();


// 🟦 클래스의 상속 
    // 자식 클래스가 부모 클래스를 상속 받아서, 부모 클래스의 기능을 사용할 수 있다. 

    // 클래스를 사용하는 이유 : 상속 받을 수 있기 때문에

    // 상속 키워드 : extends 
        // extends 키워드를 사용해서, 클래스를 상속, 시킬 수 있다. 


    // '부모클래스의 기능' 을 '상속' 받아서 사용할 수 있다. 
    class Child extends Mother {
        // 비워놓으면 > 자동으로 생성자가 만들어진다 했음. 

        // constructor 가 자동으로 생성 ❓❓❓❓❓ 
    }

    let temp2 = new Child('나는 자식' , 30);
    temp2.getInfo();
        // 부모 안에 있는 기능을 상속 받아서 쓰게 됨. 
        // get info 도 부모의 함수니까, 받아서 쓸 수 있어 


    // 동물! 이라는 class 를 만듦
    class Animal {
        constructor(name) {     // 생성자 함수
            this.name = name    // 초기화
            this.speed = 0;     // 값을 초기화
            this.age = 20;      // 값을 초기화 해서
        }

        run(speed) {
            this.speed += speed;
            console.log(` ${this.name}은 ${this.speed}로 달리는 중. 나는 부모의 함수 임. `)
        }

        stop()  {
            this.speed = 0; 
            console.log(`${this.name} 이 멈춤`);
        }
    }

    let ani = new Animal("동물")
    ani.run(10);
    ani.stop();
        // 여기에서 스피드는 0 이 되었음. 
    

    // 고양이를 만들 때, 부모인 Animal 기능을 상속 받음. 
    class Cat extends Animal {
        // 부모의 함수를 받아서 over writting (오버 라이딩)
        // 함수를 받아서, 기능을 재정의 할 수 있음. 
        // run 이라는 함수가 없으면, 부모에서 상속받은 run 함수를 실행하고,
        // run 이라는 함수가 재정의 되면, 재정의된 함수를 사용할 수 있다. (함수 오버라이딩) 
        // 부모의 함수를 상속 받아서 실행하는 것 

        run(speed) {
            this.speed = speed;
            console.log(` ${this.name}은 ${this.speed}로 달리는 중~ 나는 자식의 오버라이딩 함수임 `)
        }

        speak() {
            console.log("야옹야옹~")

        }

        stop() {
            // 재정의 했음. 
            // 부모의 stop 을 실행! -> 재정의 해서 사용할 수 있는데, 
            // 상속받은 부모의 클래스 키워드로 부모의 함수를 실행시킬 수 있다. 
            // 상속받은 부모의 클래스 키워드는 super : 상속받은 부모 클래스 
            super.stop()
                // 부모 클래스 안에 있는 함수를 사용 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐  

            this.speak()
                // cat 에서 만든 함수 
                // 본인의 함수 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
        }
    }
    // [시사점]
        // 고양이, 개 모두 'Animal' 을 상속 
        // 다만, 고양이, 개 는 '울음소리' 가 다름 
        // so, 자식마다 별개의 기능은 따로 만들어줌.

    let cat = new Cat ("때컬룩");
    cat.run(10)
    cat.stop();


// 🟦 Human 클래스 : ⭐⭐⭐ 이렇게 하지 마세요 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
    // 생성자 함수를 밑에 처럼 정의하면 안 됨. 
    // 상속받은 클래스는 반드시, '부모 클래스를 호출' 해서 사용⭐⭐⭐⭐⭐ 

    // 일반적인 함수는 new 키워드를 사용하면 -> 빈 객체가 만들어지는데 
    // this 라는 키워드에 객체를 참조 시킨다. 

    // 반면, 상속받은 '상속 클래스' Man 생성자 함수가 실행되면, 
    // 일반함수에서, 일어나는 일이 발생하지 않는다. 
    // this 는 객체를 할당하는 일을 부모 클래스의 생성자가 처리해주길 바람. ❓❓❓❓❓❓❓❓❓❓  
    
    // ⭐⭐ 생성자는 부모 클래스에서 받을 수 있게!!!!! 

    class Humam {
        // 생성자 만들기
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }
    }

    class Man extends Human {
        constructor (name, age) {
            this.name = name;
            this.age = age;
            
        }
    }

    let ma = new Man("ㅎㅎ", 30);
    console.log(ma);