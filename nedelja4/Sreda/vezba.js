//Napomena : nemojte praviti niz postova vec postovima pristupajte preko niza users
let post1 = {
    title: 'naziv posta 1',
    text: 'neki tekst 111',
    likes: 6,
    comments: ['kom1','kom2','kom3']
}
let post2 = {
    title: 'naziv posta 2',
    text: 'neki tekst 222',
    likes: 1,
    comments: ['kom2','kom3']
}
let post3 = {
    title: 'naziv posta 3',
    text: 'neki tekst 333',
    likes: 118,
    comments: ['kom1','kom2']
}
let users = [
    {username:'Ana', password:'jfdh34ha23',posts:[post1,post2,post3]},
    {username:'Pera', password:'444jjj',posts:[post2,post3]},
    {username:'Pavle', password:'46gfj',posts:[post1,post3]}]
    
    //Za svakog korisnika ispisati njegovo ime i naslove postova koje je on kreirao
    users.forEach(user => {
        console.log(`${user.username}:`);
        user.posts.forEach(post => {
            console.log(post.title);
        });
    });
    
    //Napisati funkciju koja racuna ukupan broj lajkova za jednog korisnika (i vraca taj broj lajkova)
    likes(users[1])
    function likes(user) {
        let likesSum = 0;
        user.posts.forEach(post => {
            likesSum+=post.likes
        });
        // console.log(likesSum);
        return likesSum
    }
    //Napisati funkciju koja vraca korisnika(ceo objekat user) sa najvise lajkova
    mostLiked(users)
    function mostLiked(users) {
        users.forEach((user)=>{
            this.sum = 0
            user.posts.forEach(post => {
                this.sum+=post.likes
            });
            user.likeSum = this.sum
            console.log(user.likeSum);
            
        })
        
        let mostLikesUser = users.reduce((a, b) => {
            if (a.likeSum > b.likeSum) {
                return a
            }else{
                return b
            }
        })
        console.log(mostLikesUser);
        return mostLikesUser
    }
    //Ispisati sve komentare koji sadrze u sebi string 'kom'
    users.forEach(user => {
        user.posts.forEach(post=>{
            post.comments.forEach(com => {
                if (com.includes('kom')) {
                    console.log(com);
                }
            })
        })
    });
    // Svakom post objektu dodeliti funkciju koja uvecava broj lajkova tog posta za jedan (post3.dodajLajk())
    
    users.forEach(user => {
        user.posts.forEach(post => {
            post.dodajLajk = function () {
                post.likes = post.likes+1
            }
            
        });
    });
    console.log(post3.likes);
    post3.dodajLajk()
    console.log(post3.likes);
    
    // Napisati funkciju koja vraca niz usera kojima je sifra duza od 5 karaktera
    password5(users)
    function password5(users) {
        let longPassUsrs = []
        users.forEach(user => {
            if (user.password.length > 5) {
                longPassUsrs.push(user)
            }
        });
        console.log(longPassUsrs);
        return longPassUsrs
    }
    // Napisati funkciju koja vraca samo onaj post koji ima tacno N lajkova //pogledati funkciju find
    let n = 119

    nLikes(users,n)
    function nLikes(users,n) {
        users.forEach(user => {
            user.posts.forEach(post => {
                if (post.likes === n) {
                    console.log(post);
                    return post
                }
            });
        });
    }
