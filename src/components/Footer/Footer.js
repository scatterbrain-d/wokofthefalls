import React from "react";

const footer = () => {
        
        const fortunes = [
                "Today it's up to you to create the peacefulness you long for.",
                "A friend asks only for your time not your money.",
                "A smile is your passport into the hearts of others.",
                "A good way to keep healthy is to eat more Chinese food.",
                "Your high-minded principles spell success.",
                "Hard work pays off in the future, laziness pays off now.",
                "Change can hurt, but it leads a path to something better.",
                "Enjoy the good luck a companion brings you.",
                "People are naturally attracted to you.",
                "A chance meeting opens new doors to success and friendship.",
                "You learn from your mistakes... You will learn a lot today.",
                "If you have something good in your life, don't let it go!",
                "Your shoes will make you happy today.",
                "You cannot love life until you live the life you love.",
                "Land is always on the mind of a flying bird.",
                "The man or woman you desire feels the same about you.",
                "Meeting adversity well is the source of your strength.",
                "A dream you have will come true.",
                "Our deeds determine us, as much as we determine our deeds.",
                "Never give up. You're not a failure if you don't give up.",
                "You will become great if you believe in yourself.",
                "There is no greater pleasure than seeing your loved ones prosper.",
                "You will marry your lover.",
                "A very attractive person has a message for you.",
                "It is now, and in this world, that we must live.",
                "You must try, or hate yourself for not trying.",
                "You can make your own happiness.",
                "The greatest risk is not taking one.",
                "The love of your life is stepping into your planet this summer.",
                "Love can last a lifetime, if you want it to.",
                "Adversity is the parent of virtue.",
                "Serious trouble will bypass you.",
                "Now is the time to try something new.",
                "Wealth awaits you very soon.",
                "If you feel you are right, stand firmly by your convictions.",
                "If winter comes, can spring be far behind?",
                "Keep your eye out for someone special.",
                "You are very talented in many ways.",
                "A stranger, is a friend you have not spoken to yet.",
                "A new voyage will fill your life with untold memories.",
                "You will travel to many exotic places in your lifetime.",
                "Your ability for accomplishment will follow with success.",
                "Nothing astonishes men so much as common sense and plain dealing."
        ];
        
        const index = Math.floor(Math.random() * fortunes.length);
        
        return (
                <div id="footer">
                        <p>Today's Fortune: {fortunes[index]}</p>
                </div>
        );
};
export default footer;