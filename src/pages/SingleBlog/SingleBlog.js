import React from 'react';
import './SingleBlog.scss';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import BlogData from '../../sections/Blogs/BlogData';
import Footer from '../../sections/Footer/Footer';

const SingleBlog = () => {

    const {url} = useParams();
    const blog = BlogData.find(blog => blog.url === url);
    const { index,} = blog;

    return (
        <>
            <Navbar />
            <section className='section-bg pb-70 single-blog'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            {
                                // eslint-disable-next-line
                                index == 1 && 
                                <main className="single-blog-area">
                                    <p className="single-blog-category">ROOT CANAL</p>
                                    <h2 className="single-blog-title">
                                        Is Root Canal Treatment Painful? What Indian Patients Should Know
                                    </h2>

                                    <p className="single-blog-text">
                                        Root canal treatment is one of the most misunderstood dental procedures in India. Many patients delay treatment because they believe it is extremely painful. In reality, modern root canal treatment is designed to relieve pain — not cause it.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Why Do People Think Root Canal Is Painful?
                                    </p>
                                    <p className="single-blog-text">
                                        In the past, dental treatments were done with limited technology and anesthesia. These old experiences, along with stories from others, have created fear around root canal treatment. However, dentistry has advanced significantly over the years.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        What Does a Root Canal Actually Do?
                                    </p>
                                    <p className="single-blog-text">
                                        A root canal removes infected or inflamed pulp from inside the tooth. This infection is the real cause of pain. Once it is removed and the tooth is cleaned and sealed, pain reduces dramatically.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        How Modern Dentistry Makes RCT Comfortable
                                    </p>
                                    <p className="single-blog-text">
                                        Today, dentists use effective local anesthesia, rotary instruments, and advanced techniques that make the procedure comfortable and precise. Most patients report little to no pain during treatment and feel relief soon after.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        What Indian Patients Should Expect
                                    </p>
                                    <p className="single-blog-text">
                                        During the procedure, you may feel mild pressure but not pain. After treatment, slight discomfort is normal for a day or two and can be managed easily with medication.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Final Thoughts
                                    </p>
                                    <p className="single-blog-text">
                                        Root canal treatment is a safe and effective way to save your natural tooth. Delaying treatment due to fear often leads to more pain and complicated procedures later.
                                    </p>
                                </main>

                            }
                            {
                                // eslint-disable-next-line
                                index == 2 && 
                                <main className="single-blog-area">
                                    <p className="single-blog-category">GUM CARE</p>
                                    <h2 className="single-blog-title">
                                        Bleeding Gums in India: Causes, Home Care & When to See a Dentist
                                    </h2>

                                    <p className="single-blog-text">
                                        Bleeding gums are a common dental complaint in India and are often ignored until the problem becomes severe. While occasional bleeding may seem harmless, it can be an early sign of gum disease.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Common Causes of Bleeding Gums
                                    </p>
                                    <p className="single-blog-text">
                                        Poor oral hygiene, plaque buildup, vitamin deficiencies, smoking, and tobacco use are major causes. Aggressive brushing and improper brushing techniques can also injure the gums.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Why Bleeding Gums Should Not Be Ignored
                                    </p>
                                    <p className="single-blog-text">
                                        Bleeding gums are often the first stage of gum disease. If left untreated, this can progress to periodontitis, leading to gum recession, loose teeth, and tooth loss.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Home Care Tips for Healthy Gums
                                    </p>
                                    <p className="single-blog-text">
                                        Brush gently twice a day using a soft toothbrush, floss daily, and rinse your mouth after meals. Maintaining a balanced diet with sufficient vitamins also supports gum health.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        When Should You See a Dentist?
                                    </p>
                                    <p className="single-blog-text">
                                        If bleeding continues for more than a few days, is accompanied by swelling or bad breath, or occurs frequently, it is important to consult a dentist for professional evaluation and cleaning.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Conclusion
                                    </p>
                                    <p className="single-blog-text">
                                        Healthy gums are essential for healthy teeth. Early attention to bleeding gums can prevent serious dental problems and ensure long-term oral health.
                                    </p>
                                </main>
                            }
                            {
                                // eslint-disable-next-line
                                index == 3 && 
                                <main className="single-blog-area">
                                    <p className="single-blog-category">ORAL HYGIENE</p>
                                    <h2 className="single-blog-title">Simple Dental Care Habits for a Healthy Smile at Any Age</h2>

                                    <p className="single-blog-text">
                                        Good oral health does not depend on age — it depends on habits. Many dental problems can be prevented by following simple daily routines and visiting a dentist regularly.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Brush and Floss Correctly
                                    </p>
                                    <p className="single-blog-text">
                                        Brushing twice a day with proper technique and flossing once daily removes plaque and prevents cavities and gum disease.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Diet Matters
                                    </p>
                                    <p className="single-blog-text">
                                        Limiting sugary foods and acidic drinks protects enamel. A balanced diet supports both oral and overall health.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Regular Dental Checkups
                                    </p>
                                    <p className="single-blog-text">
                                        Routine dental visits help detect problems early, making treatment simpler, quicker, and more comfortable.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Final Advice
                                    </p>
                                    <p className="single-blog-text">
                                        Small daily habits make a big difference. Consistent care and professional guidance help maintain a healthy smile for life.
                                    </p>
                                </main>

                            }
                            {
                                // eslint-disable-next-line
                                index == 4 && 
                                <main className="single-blog-area">
                                    <p className="single-blog-category">PATIENT EXPERIENCE</p>
                                    <h2 className="single-blog-title">Painless Dental Treatment in Patna: What Patients Really Experience</h2>

                                    <p className="single-blog-text">
                                        One of the most common fears patients have before visiting a dentist is pain. Many Google reviews at Twamev Dental Clinic highlight one important word again and again — painless. But what actually makes a dental treatment painless, and what can patients realistically expect?
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Why Pain-Free Dentistry Matters
                                    </p>
                                    <p className="single-blog-text">
                                        Dental pain creates anxiety and often delays treatment. When issues like cavities or infections are ignored, they worsen over time. Painless dentistry encourages patients to seek timely care, leading to better long-term oral health.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        What Patients Say in Reviews
                                    </p>
                                    <p className="single-blog-text">
                                        Many patients mention that procedures such as root canal treatment and extractions were far more comfortable than expected. Clear explanations, gentle handling, and modern techniques play a big role in reducing fear and discomfort.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        How Modern Techniques Reduce Pain
                                    </p>
                                    <p className="single-blog-text">
                                        Advanced anesthesia, rotary instruments, and careful treatment planning help minimize pain during procedures. These techniques also reduce treatment time and speed up recovery.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Final Thoughts
                                    </p>
                                    <p className="single-blog-text">
                                        Painless dental treatment is no longer a promise — it is a standard when modern dentistry is practiced correctly. Patient reviews reflect trust, comfort, and satisfaction, which are essential for a positive dental experience.
                                    </p>
                                </main>
                            }
                            {
                                // eslint-disable-next-line
                                index == 5 && 
                                <main className="single-blog-area">
                                    <p className="single-blog-category">DENTAL HEALTH</p>
                                    <h2 className="single-blog-title">Common Dental Problems in India and How to Prevent Them</h2>

                                    <p className="single-blog-text">
                                        Dental problems are extremely common in India due to dietary habits, lack of awareness, and delayed dental visits. Many issues start small but become serious if ignored. Understanding these problems is the first step toward prevention.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        1. Tooth Decay and Cavities
                                    </p>
                                    <p className="single-blog-text">
                                        High sugar intake, frequent snacking, and improper brushing are major causes of cavities. Consuming sweets, tea with sugar, and packaged snacks increases the risk significantly.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        2. Gum Disease
                                    </p>
                                    <p className="single-blog-text">
                                        Bleeding gums and bad breath are often ignored in the early stages. Poor oral hygiene and tobacco use are leading contributors to gum disease in India.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        3. Tooth Sensitivity
                                    </p>
                                    <p className="single-blog-text">
                                        Drinking hot chai, cold drinks, and acidic foods can cause sensitivity, especially when enamel is weak or gums are receding.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Prevention Tips
                                    </p>
                                    <p className="single-blog-text">
                                        Brushing twice daily, flossing, limiting sugar intake, and visiting a dentist every six months can prevent most dental problems before they become painful or expensive.
                                    </p>

                                    <p className="single-blog-text">
                                        Early prevention not only protects your smile but also saves time, money, and discomfort in the long run.
                                    </p>
                                </main>

                            }
                            {
                                // eslint-disable-next-line
                                index == 6 &&
                                <main className="single-blog-area">
                                    <p className="single-blog-category">AWARENESS</p>
                                    <h2 className="single-blog-title">Why Regular Dental Checkups Save Money in the Long Run</h2>

                                    <p className="single-blog-text">
                                        In India, many people visit the dentist only when pain becomes unbearable. Unfortunately, delayed treatment often leads to complex procedures that are more expensive and time-consuming.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Small Problems Are Cheaper to Treat
                                    </p>
                                    <p className="single-blog-text">
                                        A minor cavity can be treated easily if detected early. When ignored, it may require a root canal or extraction, increasing both cost and discomfort.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Preventive Care Reduces Emergencies
                                    </p>
                                    <p className="single-blog-text">
                                        Regular checkups help identify gum disease, decay, and bite issues before they turn into dental emergencies that require urgent and costly care.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Better Oral Health, Better Overall Health
                                    </p>
                                    <p className="single-blog-text">
                                        Poor oral health has been linked to diabetes, heart disease, and infections. Preventive dental care helps reduce long-term health risks and medical expenses.
                                    </p>

                                    <p className="single-blog-text" style={{ fontWeight: 'bold' }}>
                                        Final Thought
                                    </p>
                                    <p className="single-blog-text">
                                        Routine dental visits are an investment, not an expense. Regular checkups ensure healthier teeth, fewer complications, and lower treatment costs over time.
                                    </p>
                                </main>

                            }
                        </div>
                        <div className="col-lg-3">
                            <div className="blog-sidebar">
                                <div className="sidebar-subscribe mb-5">
                                    <h3 className="sidebar-heading">Get Latest Updates</h3>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className='form-control' placeholder='Subscribe to email'/>
                                            <input className='btn btn-primary mt-1 w-100' type="button" value="Subscribe" />
                                        </div>
                                    </form>
                                </div>

                                <div className="sidebar-category mb-3">
                                    <h3 className="sidebar-heading">Categories</h3>
                                    <ul>
                                        <li><Link href="/">Technology</Link></li>
                                        <li><Link href="/">Root Canal</Link></li>
                                        <li><Link href="/">Teeth</Link></li>
                                        <li><Link href="/">Whitening</Link></li>
                                        <li><Link href="/">Dentures</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default SingleBlog;