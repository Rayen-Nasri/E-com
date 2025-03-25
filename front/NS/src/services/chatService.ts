
type ResponseCategory = 'product' | 'shipping' | 'returns' | 'account' | 'general' | 'greating';

interface ResponseTemplate {
  category: ResponseCategory;
  keywords: string[];
  responses: string[];
}

const responseTemplates: ResponseTemplate[] = [
  {
    category : 'greating',
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'howdy', 'welcome', 'hola', 'bonjour', 'start', 'begin'],
    responses : [
      "Hello! Welcome to NS Furniture. How can I assist you with your furniture needs today?",
      "Hi there! I'm your NS Furniture virtual assistant. I'd be happy to help you find the perfect pieces for your home.",
      "Welcome to NS Furniture! I'm here to help with any questions about our collections, delivery options, or design advice. What brings you to our store today?",
      "Hello and welcome! I'm your NS Furniture assistant. Whether you're furnishing a new home or updating your space, I'm here to make your shopping experience seamless. What can I help you with?"
    ]
  },
  {
    category: 'product',
    keywords: ['furniture', 'product', 'item', 'chair', 'table', 'sofa', 'bed', 'desk', 'bookshelf', 'cabinet', 'quality', 'material', 'wood', 'fabric', 'leather', 'dimensions', 'size', 'color', 'style', 'collection', 'price', 'cost', 'discount', 'sale'],
    responses: [
      "Our furniture is crafted with premium materials including solid wood, high-grade metals, and luxurious fabrics. Each piece undergoes rigorous quality testing to ensure it meets our high standards.",
      "We offer a diverse range of furniture styles from modern minimalist to classic traditional designs. All our products are designed for both aesthetics and durability, with prices ranging from $199 for accent pieces to $2,499 for premium collections.",
      "Our products come with detailed care instructions to ensure longevity. We recommend regular dusting with a soft cloth and keeping furniture away from direct sunlight and heat sources to prevent fading or warping.",
      "All product dimensions and materials are listed on each item's product page. If you need specific information about a piece, please provide the product name or SKU number, and I can look up those details for you.",
      "Our furniture collections are designed to complement each other, allowing you to create a cohesive look throughout your home. Would you like recommendations for pieces that work well together?"
    ]
  },
  {
    category: 'shipping',
    keywords: ['delivery', 'ship', 'shipping', 'arrive', 'track', 'order status', 'when', 'time', 'international', 'expedited', 'free shipping', 'delivery fee', 'assembly', 'white glove', 'curbside'],
    responses: [
      "Standard shipping typically takes 3-5 business days within the continental US for in-stock items. Larger furniture pieces may require 7-10 business days. International shipping varies by location, usually 10-21 business days.",
      "You can track your order by logging into your account and visiting the 'Order History' section. There you'll find real-time updates on your shipment, including estimated delivery date and tracking number.",
      "We ship to most countries worldwide. Shipping costs are calculated based on item weight, dimensions, and delivery location. Free shipping is available on orders over $999 within the continental US.",
      "For large furniture items, we offer several delivery options: standard curbside delivery (free on qualifying orders), threshold delivery ($49), and white glove delivery with assembly ($149). These options can be selected during checkout.",
      "Custom and made-to-order furniture typically ships within 4-6 weeks from the order date. You'll receive an email confirmation when your order ships with tracking information."
    ]
  },
  {
    category: 'returns',
    keywords: ['return', 'refund', 'exchange', 'damaged', 'wrong', 'policy', 'warranty', 'cancel', 'cancellation', 'money back', 'satisfaction', 'defective', 'broken', 'missing parts', 'repair'],
    responses: [
      "We offer a 30-day return policy for most products. Items must be in their original condition with all packaging and tags for a full refund. Custom and clearance items are final sale. Return shipping fees may apply unless the item is defective.",
      "If your item arrived damaged or defective, please contact us within 48 hours with photos of the damage at support@nsfurniture.com, and we'll arrange a replacement or repair at no additional cost.",
      "Our furniture comes with a warranty ranging from 1 to 10 years depending on the product line. This covers manufacturing defects but not normal wear and tear or damage from improper use. Extended warranties are available for purchase.",
      "To initiate a return, please log into your account, select the order, and click 'Return Item'. You'll receive a return authorization and shipping instructions. Refunds are processed within 10-14 business days after we receive the returned item.",
      "If you need to cancel an order, please contact us immediately at 1-800-555-7890. Orders can typically be canceled without penalty if they haven't entered the shipping process. Custom orders may incur a restocking fee."
    ]
  },
  {
    category: 'account',
    keywords: ['account', 'login', 'password', 'profile', 'sign up', 'register', 'forgot', 'reset', 'email', 'notification', 'preferences', 'wishlist', 'save', 'payment', 'credit card', 'address', 'update', 'delete'],
    responses: [
      "You can manage your account details, including address, payment information, and communication preferences in the 'My Account' section after logging in. Changes are saved automatically and take effect immediately.",
      "If you've forgotten your password, use the 'Forgot Password' link on the login page. We'll send you instructions to reset it via the email address associated with your account. The reset link is valid for 24 hours.",
      "Creating an account allows you to track orders, save favorites to your wishlist, and checkout faster. Your information is securely stored with encryption and never shared with third parties.",
      "To update your email preferences, log into your account and visit the 'Communication Preferences' section. There you can choose which types of notifications and promotions you'd like to receive.",
      "For security reasons, we don't store complete credit card information. You'll need to re-enter your payment details for each purchase, or you can save them securely for future use by enabling the 'Save Payment Method' option during checkout."
    ]
  },
  {
    category: 'general',
    keywords: [],
    responses: [
      "Thank you for your question. I'd be happy to help you with that. Could you provide a bit more detail so I can give you the most accurate information?",
      "I appreciate your interest in NS Furniture. Our customer service team is also available Monday-Friday, 9am-6pm EST at support@nsfurniture.com or by phone at 1-800-555-7890 for more personalized assistance.",
      "Thank you for reaching out. If you have any other questions about our products, services, or ongoing promotions, please don't hesitate to ask.",
      "I'm here to help with any questions about our furniture collections, delivery options, or design advice. Is there something specific you're looking for today?",
      "Welcome to NS Furniture! We're currently offering a seasonal promotion with up to 25% off select living room collections. Would you like more information about our current sales?"
    ]
  }
];

const categorizeMessage = (message: string): ResponseCategory => {
  const lowerMessage = message.toLowerCase();
  
  for (const template of responseTemplates) {
    if (template.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return template.category;
    }
  }
  
  return 'general';
};

const getRandomResponse = (category: ResponseCategory): string => {
  const template = responseTemplates.find(t => t.category === category);
  if (!template) return responseTemplates.find(t => t.category === 'general')!.responses[0];
  
  const randomIndex = Math.floor(Math.random() * template.responses.length);
  return template.responses[randomIndex];
};

export const generateAIResponse = (message: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const category = categorizeMessage(message);
      const response = getRandomResponse(category);
      resolve(response);
    }, 1000);
  });
};