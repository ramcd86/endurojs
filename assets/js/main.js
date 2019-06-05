
class MainComponent {

    constructor(quotesList) {
        this.quotes = quotesList;
        this.quotesBlock = document.querySelector('#quoteBlock');
        this.init();
    }

    init() {
        if (this.quotesBlock) {
            this.quotePopulator();
        }
    }

    quotePopulator() {
        let number = Math.floor(Math.random() * this.quotes.length);
        this.quotesBlock.innerHTML = `
            <h2>${this.quotes[number].quote}</h2>
            <h3>${this.quotes[number].name}</h3>
        `;
    }

}



const quotesList = [
    {
        quote: "<i class=\"fas fa-quote-left\"></i>Many people consider the things government does for them to be social progress but they regard the things government does for others as socialism.",
        name: " Earl Warren"
    },
    {
        quote: "<i class=\"fas fa-quote-left\"></i>‎The party that leans upon the workers but serves the bourgeoisie, in the period of the greatest sharpening of the class struggle, cannot but sense the smells wafted from the waiting grave.",
        name: " Leon Trotsky"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>Socialism is not a science, a sociology in miniature: it is a cry of pain. ",
        name: " Émile Durkheim"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>You show me a capitalist, and I'll show you a bloodsucker ",
        name: " Malcom X"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>You rich people are all the same. You couldn't care less about the other half of the world. They can all starve to death for all you care! ",
        name: " Sally Wentworth, Summer Fire"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>When I give food to the poor, they call me a saint. When I ask why the poor have no food, they call me a communist. ",
        name: " Dom Helder Camara, Dom Helder Camara: Essential Writings"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>Freedom in capitalist society always remains about the same as it was in ancient Greek republics: Freedom for slave owners. ",
        name: " Vladimir Lenin"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>The Revolution introduced me to art, and in turn, art introduced me to the Revolution! ",
        name: " Albert Einstein"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>The end may justify the means as long as there is something that justifies the end. ",
        name: " Leon Trotsky, Their Morals and Ours"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred. ",
        name: " Martin Luther King Jr."
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>Civil government, so far as it is instituted for the security of property, is in reality instituted for the defense of the rich against the poor, or of those who have some property against those who have none at all. ",
        name: " Adam Smith"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>It is not what you can do for your country, but what you can do for all of mankind. ",
        name: " Mike Norton"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>Despair is typical of those who do not understand the causes of evil, see no way out, and are incapable of struggle. ",
        name: " Vladimir Lenin"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>If we can find the money to kill people, we can find the money to help people. ",
        name: " Tony Benn"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>Any war that requires the suspension of reason as a necessity for support is a bad war. ",
        name: " Norman Mailer"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>I saw America's economy last night, people raiding dumpsters at a higher rate than normal in my home town. Digging through garbage shouldn't be a career. Thanks Democrats. Thanks Republicans. ",
        name: " Carroll Bryant"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>After all, if you do not resist the apparently inevitable, you will never know how inevitable the inevitable was. ",
        name: " Terry Eagleton, Why Marx Was Right"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>A socialist is just someone who is unable to get over his or her astonishment that most people who have lived and died have spent lives of wretched, fruitless, unremitting toil. ",
        name: " Terry Eagleton, Ideology: An Introduction"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>Genuine equality means not treating everyone the same, but attending equally to everyone’s different needs. ",
        name: " Terry Eagleton, Why Marx Was Right"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>They want to be natural, the anti-social little beasts. They just don't realize that everyone's good depends on everyone's cooperation. ",
        name: " Richard Adams, Watership Down"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>Unity is a great thing and a great slogan. But what the workers’ cause needs is the unity of Marxists, not unity between Marxists, and opponents and distorters of Marxism. ",
        name: " Vladimir Lenin"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>We are convinced that liberty without socialism is privilege, injustice; and that socialism without liberty is slavery and brutality. ",
        name: " Mikhail Bakunin"
    }, {
        quote: "<i class=\"fas fa-quote-left\"></i>But love, like the sun that it is, sets afire and melts everything. what greed and privilege to build up over whole centuries the indignation of a pious spirit, with its natural following of oppressed souls, will cast down with a single shove. ",
        name: " Jose Marti"
    }
];

new MainComponent(quotesList);