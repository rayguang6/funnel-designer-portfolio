// import React from 'react';
// import { Card } from '../index';
// import { GRADIENTS } from '@/app/constants/theme';

// interface TestimonialCardProps {
//   quote: string;
//   author: string;
//   company?: string;
//   image?: string;
//   className?: string;
// }

// const TestimonialCard = ({
//   quote,
//   author,
//   company,
//   image,
//   className = ''
// }: TestimonialCardProps) => {
//   // Generate star rating

//   return (
//     <Card className={className}>
//       <div className="flex flex-col h-full">
//         {/* Quote mark */}
//         <div className="mb-4">
//           <svg className={`w-10 h-10 ${GRADIENTS.text} fill-current`} viewBox="0 0 32 32">
//             <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
//           </svg>
//         </div>
        
//         {/* Quote content */}
//         <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow italic">
//           "{quote}"
//         </p>
        
//         {/* Rating */}
//         <div className="flex mb-4">
//           "⭐️⭐️⭐️⭐️⭐️"
//         </div>
        
//         {/* Author info */}
//         <div className="flex items-center">
//           {image && (
//             <div className="mr-4">
//               <img 
//                 src={image} 
//                 alt={author} 
//                 className="w-12 h-12 rounded-full object-cover"
//               />
//             </div>
//           )}
//           <div>
//             <p className={`font-bold ${GRADIENTS.text}`}>{author}</p>
//             {company && (
//               <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default TestimonialCard; 