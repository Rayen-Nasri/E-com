type ResponseCategory = 'product' | 'shipping' | 'returns' | 'account' | 'general' | 'greeting';

interface ResponseTemplate {
  category: ResponseCategory;
  keywords: Array<{
    word: string;
    weight: number;
  }>;
  responses: Array<{
    text: string;
    context?: string[];
    priority?: number;
  }>;
}

const responseTemplates: ResponseTemplate[] = [
  {
    category: 'greeting',
    keywords: [
      { word: 'hello', weight: 1 },
      { word: 'hi', weight: 1 },
      { word: 'hey', weight: 0.8 },
      { word: 'greetings', weight: 0.7 },
      { word: 'good morning', weight: 0.9 },
      { word: 'good afternoon', weight: 0.9 },
      { word: 'good evening', weight: 0.9 },
      { word: 'howdy', weight: 0.8 },
      { word: 'welcome', weight: 0.8 },
      { word: 'hola', weight: 0.7 },
      { word: 'bonjour', weight: 0.7 },
      { word: 'start', weight: 0.6 },
      { word: 'begin', weight: 0.6 }
    ],
    responses: [
      {
        text: "Hello! Welcome to NN Furniture. How can I assist you with your furniture needs today?",
        priority: 1
      },
      {
        text: "Hi there! I'm your NN Furniture virtual assistant. I'd be happy to help you find the perfect pieces for your home.",
        priority: 2
      },
      {
        text: "Welcome to NN Furniture! I'm here to help with any questions about our collections, delivery options, or design advice. What brings you to our store today?",
        priority: 3
      },
      {
        text: "Hello and welcome! I'm your NN Furniture assistant. Whether you're furnishing a new home or updating your space, I'm here to make your shopping experience seamless. What can I help you with?",
        priority: 4
      }
    ]
  },
  {
    category: 'product',
    keywords: [
      { word: 'furniture', weight: 1 },
      { word: 'product', weight: 0.9 },
      { word: 'item', weight: 0.8 },
      { word: 'chair', weight: 0.7 },
      { word: 'table', weight: 0.7 },
      { word: 'sofa', weight: 0.7 },
      { word: 'bed', weight: 0.7 },
      { word: 'desk', weight: 0.7 },
      { word: 'bookshelf', weight: 0.7 },
      { word: 'cabinet', weight: 0.7 },
      { word: 'quality', weight: 0.8 },
      { word: 'material', weight: 0.8 },
      { word: 'wood', weight: 0.8 },
      { word: 'fabric', weight: 0.8 },
      { word: 'leather', weight: 0.8 },
      { word: 'dimensions', weight: 0.8 },
      { word: 'size', weight: 0.8 },
      { word: 'color', weight: 0.8 },
      { word: 'style', weight: 0.8 },
      { word: 'collection', weight: 0.8 },
      { word: 'price', weight: 0.8 },
      { word: 'cost', weight: 0.8 },
      { word: 'discount', weight: 0.8 },
      { word: 'sale', weight: 0.8 }
    ],
    responses: [
      {
        text: "Our furniture is crafted with premium materials including solid wood, high-grade metals, and luxurious fabrics. Each piece undergoes rigorous quality testing to ensure it meets our high standards.",
        priority: 1
      },
      {
        text: "We offer a diverse range of furniture styles from modern minimalist to classic traditional designs. All our products are designed for both aesthetics and durability, with prices ranging from $199 for accent pieces to $2,499 for premium collections.",
        priority: 2
      },
      {
        text: "Our products come with detailed care instructions to ensure longevity. We recommend regular dusting with a soft cloth and keeping furniture away from direct sunlight and heat sources to prevent fading or warping.",
        priority: 3
      },
      {
        text: "All product dimensions and materials are listed on each item's product page. If you need specific information about a piece, please provide the product name or SKU number, and I can look up those details for you.",
        priority: 4
      },
      {
        text: "Our furniture collections are designed to complement each other, allowing you to create a cohesive look throughout your home. Would you like recommendations for pieces that work well together?",
        priority: 5
      }
    ]
  },
  {
    category: 'shipping',
    keywords: [
      { word: 'delivery', weight: 1 },
      { word: 'ship', weight: 0.9 },
      { word: 'shipping', weight: 0.9 },
      { word: 'arrive', weight: 0.8 },
      { word: 'track', weight: 0.8 },
      { word: 'order status', weight: 0.8 },
      { word: 'when', weight: 0.7 },
      { word: 'time', weight: 0.7 },
      { word: 'international', weight: 0.7 },
      { word: 'expedited', weight: 0.7 },
      { word: 'free shipping', weight: 0.7 },
      { word: 'delivery fee', weight: 0.7 },
      { word: 'assembly', weight: 0.7 },
      { word: 'white glove', weight: 0.7 },
      { word: 'curbside', weight: 0.7 }
    ],
    responses: [
      {
        text: "Standard shipping typically takes 3-5 business days within the continental US for in-stock items. Larger furniture pieces may require 7-10 business days. International shipping varies by location, usually 10-21 business days.",
        priority: 1
      },
      {
        text: "You can track your order by logging into your account and visiting the 'Order History' section. There you'll find real-time updates on your shipment, including estimated delivery date and tracking number.",
        priority: 2
      },
      {
        text: "We ship to most countries worldwide. Shipping costs are calculated based on item weight, dimensions, and delivery location. Free shipping is available on orders over $999 within the continental US.",
        priority: 3
      },
      {
        text: "For large furniture items, we offer several delivery options: standard curbside delivery (free on qualifying orders), threshold delivery ($49), and white glove delivery with assembly ($149). These options can be selected during checkout.",
        priority: 4
      },
      {
        text: "Custom and made-to-order furniture typically ships within 4-6 weeks from the order date. You'll receive an email confirmation when your order ships with tracking information.",
        priority: 5
      }
    ]
  },
  {
    category: 'returns',
    keywords: [
      { word: 'return', weight: 1 },
      { word: 'refund', weight: 0.9 },
      { word: 'exchange', weight: 0.9 },
      { word: 'damaged', weight: 0.8 },
      { word: 'wrong', weight: 0.8 },
      { word: 'policy', weight: 0.8 },
      { word: 'warranty', weight: 0.8 },
      { word: 'cancel', weight: 0.8 },
      { word: 'cancellation', weight: 0.8 },
      { word: 'money back', weight: 0.8 },
      { word: 'satisfaction', weight: 0.8 },
      { word: 'defective', weight: 0.8 },
      { word: 'broken', weight: 0.8 },
      { word: 'missing parts', weight: 0.8 },
      { word: 'repair', weight: 0.8 }
    ],
    responses: [
      {
        text: "We offer a 30-day return policy for most products. Items must be in their original condition with all packaging and tags for a full refund. Custom and clearance items are final sale. Return shipping fees may apply unless the item is defective.",
        priority: 1
      },
      {
        text: "If your item arrived damaged or defective, please contact us within 48 hours with photos of the damage at support@nsfurniture.com, and we'll arrange a replacement or repair at no additional cost.",
        priority: 2
      },
      {
        text: "Our furniture comes with a warranty ranging from 1 to 10 years depending on the product line. This covers manufacturing defects but not normal wear and tear or damage from improper use. Extended warranties are available for purchase.",
        priority: 3
      },
      {
        text: "To initiate a return, please log into your account, select the order, and click 'Return Item'. You'll receive a return authorization and shipping instructions. Refunds are processed within 10-14 business days after we receive the returned item.",
        priority: 4
      },
      {
        text: "If you need to cancel an order, please contact us immediately at 1-800-555-7890. Orders can typically be canceled without penalty if they haven't entered the shipping process. Custom orders may incur a restocking fee.",
        priority: 5
      }
    ]
  },
  {
    category: 'account',
    keywords: [
      { word: 'account', weight: 1 },
      { word: 'login', weight: 0.9 },
      { word: 'password', weight: 0.9 },
      { word: 'profile', weight: 0.8 },
      { word: 'sign up', weight: 0.8 },
      { word: 'register', weight: 0.8 },
      { word: 'forgot', weight: 0.8 },
      { word: 'reset', weight: 0.8 },
      { word: 'email', weight: 0.8 },
      { word: 'notification', weight: 0.8 },
      { word: 'preferences', weight: 0.8 },
      { word: 'wishlist', weight: 0.8 },
      { word: 'save', weight: 0.8 },
      { word: 'payment', weight: 0.8 },
      { word: 'credit card', weight: 0.8 },
      { word: 'address', weight: 0.8 },
      { word: 'update', weight: 0.8 },
      { word: 'delete', weight: 0.8 }
    ],
    responses: [
      {
        text: "You can manage your account details, including address, payment information, and communication preferences in the 'My Account' section after logging in. Changes are saved automatically and take effect immediately.",
        priority: 1
      },
      {
        text: "If you've forgotten your password, use the 'Forgot Password' link on the login page. We'll send you instructions to reset it via the email address associated with your account. The reset link is valid for 24 hours.",
        priority: 2
      },
      {
        text: "Creating an account allows you to track orders, save favorites to your wishlist, and checkout faster. Your information is securely stored with encryption and never shared with third parties.",
        priority: 3
      },
      {
        text: "To update your email preferences, log into your account and visit the 'Communication Preferences' section. There you can choose which types of notifications and promotions you'd like to receive.",
        priority: 4
      },
      {
        text: "For security reasons, we don't store complete credit card information. You'll need to re-enter your payment details for each purchase, or you can save them securely for future use by enabling the 'Save Payment Method' option during checkout.",
        priority: 5
      }
    ]
  },
  {
    category: 'general',
    keywords: [],
    responses: [
      {
        text: "Thank you for your question. I'd be happy to help you with that. Could you provide a bit more detail so I can give you the most accurate information?",
        priority: 1
      },
      {
        text: "I appreciate your interest in NN Furniture. Our customer service team is also available Monday-Friday, 9am-6pm EST at support@nsfurniture.com or by phone at 1-800-555-7890 for more personalized assistance.",
        priority: 2
      },
      {
        text: "Thank you for reaching out. If you have any other questions about our products, services, or ongoing promotions, please don't hesitate to ask.",
        priority: 3
      },
      {
        text: "I'm here to help with any questions about our furniture collections, delivery options, or design advice. Is there something specific you're looking for today?",
        priority: 4
      },
      {
        text: "Welcome to NN Furniture! We're currently offering a seasonal promotion with up to 25% off select living room collections. Would you like more information about our current sales?",
        priority: 5
      }
    ]
  }
];

interface CategoryMatch {
  category: ResponseCategory;
  confidence: number;
  matches: string[];
}

const categorizeMessage = (message: string): CategoryMatch[] => {
  const lowerMessage = message.toLowerCase();
  const words = lowerMessage.split(/\s+/);
  
  const matches = responseTemplates.map(template => {
    let confidence = 0;
    const matchedWords: string[] = [];
    
    template.keywords.forEach(({ word, weight }) => {
      if (words.some(w => w.includes(word))) {
        confidence += weight;
        matchedWords.push(word);
      }
    });
    
    return {
      category: template.category,
      confidence,
      matches: matchedWords
    };
  });
  
  return matches
    .filter(match => match.confidence > 0)
    .sort((a, b) => b.confidence - a.confidence);
};

const getContextAwareResponse = (matches: CategoryMatch[]): string => {
  if (matches.length === 0) {
    return getRandomResponse('general');
  }

  if (matches.length === 1) {
    return getRandomResponse(matches[0].category);
  }

  // Combine responses from top 2 matching categories
  const primaryResponse = getRandomResponse(matches[0].category);
  const secondaryResponse = getRandomResponse(matches[1].category);
  
  // Combine responses intelligently based on confidence scores
  if (matches[0].confidence > matches[1].confidence * 2) {
    return primaryResponse;
  }
  
  return `${primaryResponse} Additionally, ${secondaryResponse.toLowerCase()}`;
};

const getRandomResponse = (category: ResponseCategory): string => {
  const template = responseTemplates.find(t => t.category === category);
  if (!template) return responseTemplates.find(t => t.category === 'general')!.responses[0].text;
  
  // Prioritize responses based on their priority value
  const sortedResponses = [...template.responses].sort((a, b) => 
    (b.priority || 0) - (a.priority || 0)
  );
  
  const randomIndex = Math.floor(Math.random() * sortedResponses.length);
  return sortedResponses[randomIndex].text;
};

export const generateAIResponse = (message: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const matches = categorizeMessage(message);
      const response = getContextAwareResponse(matches);
      resolve(response);
    }, 1000);
  });
};