// var AdaptiveCard = require('/assets/cards/welcomeCard.json');
import * as AdaptiveCards from "adaptivecards";

const card = {
    "type": "AdaptiveCard",
    "body": [
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "items": [
                        {
                            "type": "Image",
                            "style": "Person",
                            "url": "https://static.wixstatic.com/media/3a60df_ba60095194a041f0b2ae04cfbae19e5c~mv2.gif",
                            "size": "Medium",
                            "height": "50px"
                        }
                    ],
                    "width": "auto"
                },
                {
                    "type": "Column",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "Cisco Webex",
                            "weight": "Lighter",
                            "color": "Accent"
                        },
                        {
                            "type": "TextBlock",
                            "weight": "Bolder",
                            "text": "DevNet Chat Assistant",
                            "wrap": true,
                            "color": "Light",
                            "size": "Large",
                            "spacing": "Small"
                        }
                    ],
                    "width": "stretch"
                }
            ]
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": 35,
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "Release Date:",
                            "color": "Light"
                        },
                        {
                            "type": "TextBlock",
                            "text": "Product:",
                            "weight": "Lighter",
                            "color": "Light",
                            "spacing": "Small"
                        },
                        {
                            "type": "TextBlock",
                            "text": "OS:",
                            "weight": "Lighter",
                            "color": "Light",
                            "spacing": "Small"
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": 65,
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "TBD",
                            "color": "Light"
                        },
                        {
                            "type": "TextBlock",
                            "text": "DevNet Chat Assistant",
                            "color": "Light",
                            "weight": "Lighter",
                            "spacing": "Small"
                        },
                        {
                            "type": "TextBlock",
                            "text": "Mac, Android, Windows, Web",
                            "weight": "Lighter",
                            "color": "Light",
                            "spacing": "Small"
                        }
                    ]
                }
            ],
            "spacing": "Padding",
            "horizontalAlignment": "Center"
        },
        {
            "type": "TextBlock",
            "text": "Here is some filler text to explain what this bot will do to make your lives wonderful and stress-less. ",
            "wrap": true
        },
        {
            "type": "TextBlock",
            "text": "Buttons and Cards Resources:"
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "Image",
                            "altText": "",
                            "url": "https://developer.webex.com/images/link-icon.png",
                            "size": "Small",
                            "width": "30px"
                        }
                    ],
                    "spacing": "Small"
                },
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "[Developer Portal Buttons and Cards Guide]()",
                            "size": "Medium"
                        }
                    ],
                    "verticalContentAlignment": "Center",
                    "spacing": "Small"
                }
            ]
        },
        {
            "type": "ActionSet",
            "actions": [
                {
                    "type": "Action.Submit",
                    "title": "Subscribe to Release Notes",
                    "data": {
                        "subscribe": true
                    }
                }
            ],
            "spacing": "None"
        }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.2"
};


module.exports = function (controller) {

    // controller.botCommons = {

    //     healthCheck: process.env.PUBLIC_ADDRESS,
    //     upSince: new Date( Date.now() ).toGMTString(),
    //     botName: controller.adapter.identity.displayName,
    //     botVersion: 'v' + require( '../package.json' ).version,
    //     owner: process.env.OWNER,
    //     support: process.env.SUPPORT,
    //     botkitVersion: controller.version,
    //     platform: process.env.PLATFORM,
    //     code: process.env.CODE
    // }

    controller.hears( 'yolo', 'message,direct_message', async ( bot, message ) => {

                // Author a card
        // In practice you'll probably get this from a service
        // see http://adaptivecards.io/samples/ for inspiration


        await bot.reply( message, 'Yolo' );
        await bot.reply( message, { markdown: 'test' } );
        await bot.reply( message, { attachments: card } );



///////////////



// var AdaptiveCard = require('/assets/cards/welcomeCard.json');
import * as AdaptiveCards from "adaptivecards";ls

// Create an AdaptiveCard instance
var adaptiveCard = new AdaptiveCards.AdaptiveCard();

// Set its hostConfig property unless you want to use the default Host Config
// Host Config defines the style and behavior of a card
adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
    fontFamily: "Segoe UI, Helvetica Neue, sans-serif"
    // More host config options
});

// Set the adaptive card's event handlers. onExecuteAction is invoked
// whenever an action is clicked in the card
adaptiveCard.onExecuteAction = function(action) { alert("Ow!"); }

// For markdown support you need a third-party library
// E.g., to use markdown-it, include in your HTML page:
//     <script type="text/javascript" src="https://unpkg.com/markdown-it/dist/markdown-it.js"></script>
// And add this code to replace the default markdown handler:
//     AdaptiveCards.AdaptiveCard.onProcessMarkdown = function (text, result) {
//         result.outputHtml = markdownit().render(text);
//         result.didProcess = true;
//     };

// Parse the card payload
adaptiveCard.parse(card);

// Render the card to an HTML element:
var renderedCard = adaptiveCard.render();

// And finally insert it somewhere in your page:
document.body.appendChild(renderedCard);











////////////////







    });



    controller.commandHelp.push( { command: 'what', text: 'card testing' } );

}

