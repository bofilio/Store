export default class FakeDatabase {


    static categories=[
        {
            id:1,
            name:'Fashion',
            icon:'/shirt.png',
            description:"The numbers in the table specify the first browser version that fully",
            color:"#e28743",
            spacing:'2px'
        },
        {
            id:2,
            name:'Phones',
            icon:'/phone.png',
            description:"The numbers in the table specify the first browser version that fully",
            color:"#fc43d5",
            spacing:'2px'
    
        },
        {
            id:3,
            name:'Fashion',
            icon:'/shirt.png',
            description:"The numbers in the table specify the first browser version that fully",
            color:"#e28743",
            spacing:'2px',
        }
    ];

    static products=[
        {
            id:1,
            image:'/woman.png',
            title:'Woman style',
            price:'45000$'
        },
        {
            id:2,
            image:'/woman.png',
            title:'Men style',
            price:'4000$'
        },{
            id:1,
            image:'/woman.png',
            title:'Woman style',
            price:'45000$'
        },
        {
            id:2,
            image:'/woman.png',
            title:'Men style',
            price:'4000$'
        },{
            id:1,
            image:'/woman.png',
            title:'Woman style',
            price:'45000$'
        },
        {
            id:2,
            image:'/woman.png',
            title:'Men style',
            price:'4000$'
        },
        
        
    ]
    static getProductByNId =(id)=>{
        for (let index = 0; index < this.products.length; index++) {
            if(this.products[index].id===parseInt(id)){
                return this.products[index];
            }    
         }
         return false;
    }

    static getCategoryByID=(id)=>{
        for (let index = 0; index < this.categories.length; index++) {
           if(this.categories[index].id===parseInt(id)){
               return this.categories[index];
           }    
        }
        return false;
    }
    static  getCategoryByName= (name)=>{
        for (let index = 0; index < this.categories.length; index++) {
           if(this.categories[index].name===name){
               return this.categories[index];
           }    
        }
        return false;
    }
    
} 