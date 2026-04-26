import fs from 'fs';

const filePath = 'd:\\Abel paginas\\Cesar Reyes\\enero\\cesar-reyes-web-main\\app\\crm\\CrmClient.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Change the heading
const headingTarget = `                            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
                                La Prueba Definitiva: <span className="text-[#FF6B00]">Tu CRM en Acción</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                A tu izquierda, el panel de control. A tu derecha, el lado del cliente. Despliega una acción y sigue los pasos para ver la magia en tiempo real.
                            </p>`;
const headingReplacement = `                            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">
                                Mira cómo <span className="text-[#FF6B00]">funciona</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                Selecciona una de las funciones en el menú para ver en acción cómo tu próximo CRM a medida transformará la gestión de tu empresa.
                            </p>`;

if (content.includes(headingTarget)) {
    content = content.replace(headingTarget, headingReplacement);
    console.log('Heading replaced successfully.');
} else {
    console.log('Error: Heading not found.');
}

// 2. Find the Pricing Section
const pricingStart = `            {/* Pricing Section */}`;
const section4Start = `            {/* Section 4: The Demonstration */}`;

const startIndex = content.indexOf(pricingStart);
const endIndex = content.indexOf(section4Start);

if (startIndex !== -1 && endIndex !== -1) {
    const pricingSectionContent = content.substring(startIndex, endIndex);
    
    // Remove the pricing section from its original place
    content = content.replace(pricingSectionContent, '');
    
    // Insert it below Live Demo Section
    const demoEnd = `            </section>\n\n            {/* Problem Scenarios Section - Tabbed Interface */}`;
    if (content.includes(demoEnd)) {
        content = content.replace(demoEnd, `            </section>\n\n${pricingSectionContent}            {/* Problem Scenarios Section - Tabbed Interface */}`);
        console.log('Pricing section moved successfully.');
    } else {
        console.log('Error: Target insertion point (demoEnd) not found.');
    }
} else {
    console.log('Error: Pricing section boundaries not found.', startIndex, endIndex);
}

fs.writeFileSync(filePath, content, 'utf-8');
