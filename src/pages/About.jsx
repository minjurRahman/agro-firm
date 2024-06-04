import React from "react";

const About = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/group-of-cows-in-a-field-scott-e-barbour.jpg"
          className="w-1/2 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold  mb-4">About Our Shoe Company</h1>
          <div className=" min-h-screen">
            <div className="container mx-auto py-8">
              <p className=" mb-4">
                Introduction: Cow Firm Company is at the forefront of the dairy
                farming industry, merging traditional practices with innovative
                technologies to enhance productivity, sustainability, and animal
                welfare. Established with a vision to revolutionize dairy
                farming, Cow Firm Company has become a beacon of modern
                agriculture, known for its commitment to quality, environmental
                stewardship, and community engagement.
              </p>
              <p className=" mb-4">
                Our Mission:: At Cow Firm Company, our mission is to provide
                high-quality dairy products while maintaining the highest
                standards of animal care and environmental sustainability. We
                aim to lead the dairy industry by integrating cutting-edge
                technology, sustainable practices, and a deep respect for the
                animals that are central to our operations.
              </p>
              <p className=" mb-4">
                Innovative Practices: 1. Sustainable Farming: Sustainability is
                at the heart of everything we do. Cow Firm Company employs a
                range of sustainable farming practices to reduce our
                environmental footprint: Efficient Water Use: Implementing
                advanced irrigation systems and water recycling processes to
                minimize water consumption. Renewable Energy: Utilizing solar
                and wind energy to power our operations, significantly reducing
                our reliance on fossil fuels. Waste Management: Converting
                manure into biogas through anaerobic digestion, which is used to
                generate electricity and reduce greenhouse gas emissions. 2.
                Animal Welfare: We believe that healthy cows produce the best
                milk. Our commitment to animal welfare is reflected in every
                aspect of our farming operations: Comfortable Housing: Providing
                spacious, clean, and well-ventilated barns to ensure our cows
                live in a comfortable environment. Nutrition: Feeding our cows a
                balanced diet formulated by veterinary nutritionists to ensure
                they receive all the necessary nutrients. Health Monitoring:
                Using wearable technology to monitor the health and well-being
                of our cows in real-time, allowing us to address any issues
                promptly. 3. Technological Integration: Cow Firm Company
                leverages the latest technology to optimize our farming
                processes and ensure the highest quality of dairy products:
                Automated Milking Systems: Employing robotic milking machines to
                ensure efficient and gentle milking, reducing stress on the
                cows. Precision Agriculture: Using data analytics and IoT
                devices to monitor soil health, crop growth, and weather
                conditions, enabling precise application of fertilizers and
                pesticides. Blockchain for Traceability: Implementing blockchain
                technology to ensure full transparency and traceability of our
                dairy products from farm to table.
              </p>
              <p className=" mb-4">
                Our Products: We take pride in offering a range of high-quality
                dairy products that are not only delicious but also produced
                with the utmost care for the environment and animal welfare:
                Fresh Milk: Rich, creamy milk sourced from our well-cared-for
                cows. Cheese: A variety of cheeses made from our premium milk,
                offering flavors for every palate. Yogurt: Delicious and
                nutritious yogurt products, perfect for a healthy snack. Butter
                and Cream: Smooth and creamy butter and cream, ideal for cooking
                and baking.
              </p>
              <p className=" mb-4">
                Conclusion: Cow Firm Company is dedicated to pioneering a future
                where dairy farming is synonymous with sustainability,
                innovation, and excellence. By embracing new technologies,
                prioritizing animal welfare, and engaging with our community, we
                strive to produce the finest dairy products while making a
                positive impact on the world. Join us on our journey to create a
                better, more sustainable future for dairy farming.
              </p>
            </div>
          </div>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
