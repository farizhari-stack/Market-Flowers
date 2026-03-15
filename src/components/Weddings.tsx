import { motion } from 'motion/react';

export default function Weddings() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'A deep dive into your vision, color palette, and floral dreams to establish the aesthetic foundation.',
    },
    {
      number: '02',
      title: 'Custom Design',
      description: 'We curate a bespoke floral moodboard and proposal tailored specifically to your venue and style.',
    },
    {
      number: '03',
      title: 'Setup & Styling',
      description: 'On your special day, our team handles all installation and on-site styling to ensure perfection.',
    },
  ];

  const gallery = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCv2iUEDpd4zY-g3FsbKATF0fsYJd2rXfaqUQNsOXnx5J9ZfLs34Bl4FbmgCTs8UhG--k6NhKxK3steukjI5AgkaJFhk8xnBC8ajxcBvV4c6KlagNZtSdkCU7ulvNKDRrMtdED9wb_sR_2rlaxQx8Eo9MG44zHGIYhWjjo9HJx0-TdZKKf2-3yVl-vvCilG1A1oot0tptLBum0NtI1eGqWV1KsdKSGKst49eurBmm5jh0gwAMzi9gb1CnUjkFnKP_cULyiWeQWNaDM1',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDIoOC7R5_gRNbTYy2fNJS0BzVMAe20UFcuvnW_NaDetpRmQQBa3gMe1yJ9AIs4R6IQY1hdtz0Y1UOyNZ-WVx8G6GaO8c6gFpzSnAvglAEMmcFH79bIedYoaVrWhB_ytsTU-6qLBfVc6FFkdetllXWUTTL6Norf6WtgGsRSRXWsbQoWwMlLYgo76HwpcAi5DaB-ZKGmI7D2lAu6XwVA7DjDXTo1CventVRDTd0Tf9hrcz12Jj2WGcA8FymjbU1yjH4nuMYvrDQnC_OM',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAolrpFkRqgYbfUX77SN5sUgpp4nZ-TDTsLblkwTayEIMVS7VihQBJ7dXuC-Hd0IJ0NUCpXd6ZP4yOK14meVn5gqq--hIle1KSxFV1DVH0uFb8V4NZNo5wUnqQQcAhdOCXN-tk7_MHax22ixS8Cw1E3GiV0UcaaZBwxF1FTzk7OSV4EtEbPrHl6-GKDVz_ub-qoN4IfhjyKsLzUrODQcP_4cJwC6PDMRUNmaYdcDt7ZmcXf0QTe08MAJX-KqHZksUmYlkloJf0ecOmt',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCTSm6qlJtmLKWXNd5siHr-AJb-ecbRdaynfNJnEg-z0EGoVJfsO76I8l_pSDnixlrQfyKTg42DVnUuWhUCye6YdQjKI0FJYE9fRHxS9GLbLVJnqv7rJuOh8LD7YU7O4gvDHxA-xf19J_w5qGPTPqegBP-EXIKBdBCrVw02s4LXL9Z2Z_P8txt2n3P2v82N5mXdFBC_aFFFqkx1nNV8Guqwu0bkZoFSzeCn5azrh_SQt6XWcDoxXNuqNEzO1-7LFxnS3G8AkurvACxy',
  ];

  return (
    <section className="py-24 overflow-hidden" id="weddings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-xs text-brandGold font-bold mb-4">Our Collaborative Journey</p>
          <h2 className="heading-serif text-4xl md:text-5xl mb-6">The Wedding Process</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full border border-brandPink/30 flex items-center justify-center mx-auto mb-6">
                <span className="heading-serif text-xl italic text-brandPink">{step.number}</span>
              </div>
              <h3 className="heading-serif text-xl mb-4">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed px-4">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((src, index) => (
            <motion.img
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              alt={`Wedding Floral ${index + 1}`}
              className="w-full h-full object-cover aspect-square hover-lift"
              src={src}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="bg-brandPink text-white px-10 py-4 font-semibold uppercase tracking-widest text-xs hover:bg-brandPink/90 transition shadow-lg">
            Inquire for Your Special Day
          </button>
        </div>
      </div>
    </section>
  );
}
