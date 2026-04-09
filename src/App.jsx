import { useState, useEffect } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const [fadeIn, setFadeIn] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setFadeIn(prev => ({ ...prev, [e.target.id]: true }))
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('[id]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 4000)
  }

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <div className="min-h-screen bg-cream text-text-dark font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/97 backdrop-blur-md h-[70px] flex items-center justify-between px-[5%] border-b border-gold/25">
        <div className="font-cormorant text-gold-light">
          <div className="text-lg font-semibold tracking-wide">Dr. J.J.R. Castro Jr.</div>
          <div className="text-xs text-gold uppercase tracking-widest">MD, DPAO · Ophthalmologist</div>
        </div>
        <ul className={`flex gap-8 list-none ${mobileMenuOpen ? 'flex flex-col absolute top-[70px] left-0 right-0 bg-navy p-6 border-b border-gold/20' : 'hidden md:flex'}`}>
          <li><a href="#about" className="text-white/70 hover:text-gold text-sm uppercase tracking-widest no-underline transition-colors">About</a></li>
          <li><a href="#services" className="text-white/70 hover:text-gold text-sm uppercase tracking-widest no-underline transition-colors">Services</a></li>
          <li><a href="#clinics" className="text-white/70 hover:text-gold text-sm uppercase tracking-widest no-underline transition-colors">Clinics</a></li>
          <li><a href="#appointment" className="text-white/70 hover:text-gold text-sm uppercase tracking-widest no-underline transition-colors">Contact</a></li>
        </ul>
        <a href="#appointment" className="hidden md:block bg-gold text-navy px-4 py-2 text-sm font-medium uppercase tracking-widest no-underline hover:bg-gold-light transition-colors">
          Book Appointment
        </a>
        <button className="md:hidden flex flex-col gap-1.5 cursor-pointer" onClick={toggleMenu}>
          <span className="w-6 h-0.5 bg-gold"></span>
          <span className="w-6 h-0.5 bg-gold"></span>
          <span className="w-6 h-0.5 bg-gold"></span>
        </button>
      </nav>

      {/* Hero */}
      <section className="min-h-screen bg-navy pt-[70px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(201,169,110,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(21,45,82,0.8) 0%, transparent 60%)' }}></div>
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-gold/15 rounded-full pointer-events-none"></div>
        
        <div className="grid md:grid-cols-2 gap-0 px-[8%] py-[6rem] relative z-10">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-gold/12 border border-gold/25 px-3 py-2 mb-8 w-fit">
              <span className="text-gold text-xs uppercase tracking-widest font-medium">● Accepting New Patients</span>
            </div>
            <h1 className="font-cormorant text-5xl md:text-6xl text-white font-light leading-tight mb-2">
              Caring for Your<br/><em className="italic text-gold-light">Vision & Eyes</em>
            </h1>
            <p className="text-gold text-sm uppercase tracking-widest mb-6">Diplomate, Philippine Academy of Ophthalmology</p>
            <p className="text-white/60 text-lg max-w-md mb-8 font-light">
              Expert ophthalmological care in Quezon City. Comprehensive eye exams, cataract surgery, glaucoma management, and advanced treatments for all eye conditions.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#appointment" className="bg-gold text-navy px-6 py-3 text-sm font-medium uppercase tracking-widest no-underline hover:bg-gold-light transition-colors inline-block">
                Book a Consultation
              </a>
              <a href="#services" className="border border-gold/50 text-gold-light px-6 py-3 text-sm font-medium uppercase tracking-widest no-underline hover:border-gold hover:text-gold transition-colors inline-block">
                Our Services
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center p-8">
            <div className="bg-white/4 border border-gold/20 p-8 max-w-[360px] w-full relative">
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              <div className="mb-6 text-gold">
                <svg viewBox="0 0 64 64" className="w-16 h-16 opacity-90">
                  <ellipse cx="32" cy="32" rx="28" ry="16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="32" cy="32" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-gold-light mb-4">Specialist Ophthalmology<br/>Quezon City</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gold/12 p-3 bg-gold/4">
                  <span className="font-cormorant text-2xl text-gold block font-light">DPAO</span>
                  <span className="text-white/45 text-xs uppercase">Board Certified</span>
                </div>
                <div className="border border-gold/12 p-3 bg-gold/4">
                  <span className="font-cormorant text-2xl text-gold block font-light">2+</span>
                  <span className="text-white/45 text-xs uppercase">Clinic Locations</span>
                </div>
                <div className="border border-gold/12 p-3 bg-gold/4">
                  <span className="font-cormorant text-2xl text-gold block font-light">MD</span>
                  <span className="text-white/45 text-xs uppercase">Medical Doctor</span>
                </div>
                <div className="border border-gold/12 p-3 bg-gold/4">
                  <span className="font-cormorant text-2xl text-gold block font-light">QC</span>
                  <span className="text-white/45 text-xs uppercase">Metro Manila</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20 px-[8%]">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <div>
            <div className="bg-gradient-to-b from-navy to-navy-mid aspect-[3/4] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gold/18 to-transparent"></div>
              <span className="font-cormorant text-7xl text-gold/20 font-light z-10">JJC</span>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold p-6 text-center">
              <span className="font-cormorant text-2xl text-navy font-semibold block">DPAO</span>
              <span className="text-navy text-xs uppercase font-medium">Diplomate · PAO</span>
            </div>
          </div>
          <div>
            <p className="text-gold text-xs uppercase tracking-widest font-medium mb-3">About the Doctor</p>
            <h2 className="font-cormorant text-4xl text-navy font-light mb-4">Dr. Joselito Joel R.<br/><em className="italic text-navy-mid">Castro Jr., MD</em></h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent mb-8"></div>
            <p className="text-[#3a4a5c] mb-4 font-light leading-relaxed">
              Dr. Joselito Joel R. Castro Jr. is a board-certified ophthalmologist and a Diplomate of the Philippine Academy of Ophthalmology (DPAO). He provides comprehensive eye care services to patients across Metro Manila and surrounding provinces.
            </p>
            <p className="text-[#3a4a5c] mb-6 font-light leading-relaxed">
              With a commitment to excellence in patient care, Dr. Castro offers a wide range of ophthalmic services — from routine eye examinations to advanced surgical procedures — at multiple clinical locations in Quezon City.
            </p>
            <ul className="list-none mb-8">
              <li className="py-3 border-b border-black/6 flex items-center gap-3 text-text-muted">◆ <span className="text-xs">Doctor of Medicine (MD)</span></li>
              <li className="py-3 border-b border-black/6 flex items-center gap-3 text-text-muted">◆ <span className="text-xs">Diplomate, Philippine Academy of Ophthalmology (DPAO)</span></li>
              <li className="py-3 border-b border-black/6 flex items-center gap-3 text-text-muted">◆ <span className="text-xs">Practicing at General Miguel M. Malvar Medical Foundation, Quezon City</span></li>
              <li className="py-3 border-b border-black/6 flex items-center gap-3 text-text-muted">◆ <span className="text-xs">Affiliated with New Era General Hospital, Commonwealth Avenue</span></li>
              <li className="py-3 border-b border-black/6 flex items-center gap-3 text-text-muted">◆ <span className="text-xs">Accredited by major HMO and government health programs</span></li>
            </ul>
            <a href="#appointment" className="bg-gold text-navy px-6 py-3 text-sm font-medium uppercase tracking-widest no-underline hover:bg-gold-light transition-colors inline-block">
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-cream py-20 px-[8%]">
        <div className="mb-12">
          <p className="text-gold text-xs uppercase tracking-widest font-medium mb-3">What We Offer</p>
          <h2 className="font-cormorant text-4xl text-navy font-light mb-4">Comprehensive<br/><em className="italic text-navy-mid">Eye Care Services</em></h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-black/[0.08]">
          {[
            { title: 'Comprehensive Eye Exam', desc: 'Full evaluation of visual acuity, eye pressure, and overall ocular health.' },
            { title: 'Cataract Evaluation & Surgery', desc: 'Diagnosis and surgical management of cataracts, restoring clear vision.' },
            { title: 'Glaucoma Screening & Management', desc: 'Tonometry, optic nerve assessment, and visual field testing.' },
            { title: 'Retinal Disease Care', desc: 'Evaluation and management of diabetic retinopathy and macular degeneration.' },
            { title: 'Refraction & Prescription', desc: 'Accurate determination of refractive errors with updated lens prescriptions.' },
            { title: 'Pediatric Ophthalmology', desc: 'Specialized eye care for children including amblyopia and strabismus.' },
          ].map((service, i) => (
            <div key={i} className="bg-white p-10 hover:bg-[#f9f5ef] transition-colors group cursor-default relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-full h-[3px] bg-gold transition-all duration-300 group-hover:right-0"></div>
              <div className="text-gold mb-6">
                <svg viewBox="0 0 48 48" className="w-12 h-12">
                  <ellipse cx="24" cy="24" rx="20" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="24" cy="24" r="2.5" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-navy mb-3">{service.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed font-light">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinics */}
      <section id="clinics" className="bg-navy py-20 px-[8%]">
        <div className="mb-12">
          <p className="text-gold text-xs uppercase tracking-widest font-medium mb-3">Our Locations</p>
          <h2 className="font-cormorant text-4xl text-white font-light mb-4">Clinic<br/><em className="text-gold-light italic">Schedules</em></h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gold/20 p-8 relative bg-white/3 hover:border-gold/50 transition-colors">
            <span className="font-cormorant text-[3.5rem] text-gold/15 font-light absolute top-4 right-6">01</span>
            <h3 className="font-cormorant text-xl text-gold-light mb-4">General Miguel M. Malvar Medical Foundation</h3>
            <div className="flex items-start gap-3 mb-3">
              <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-white/60 text-sm">531 Commonwealth Avenue, Quezon City, 1100 Metro Manila</span>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 11.79a19.79 19.79 0 01-3.07-8.67A2 2 0 011.93 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <span className="text-white/60 text-sm">(02) 8932 8867</span>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              <span className="text-white/60 text-sm">Please call for current schedule</span>
            </div>
            <span className="inline-block bg-gold/12 border border-gold/25 px-3 py-1 text-gold text-xs uppercase tracking-widest">Primary Clinic</span>
          </div>
          <div className="border border-gold/20 p-8 relative bg-white/3 hover:border-gold/50 transition-colors">
            <span className="font-cormorant text-[3.5rem] text-gold/15 font-light absolute top-4 right-6">02</span>
            <h3 className="font-cormorant text-xl text-gold-light mb-4">New Era General Hospital</h3>
            <div className="flex items-start gap-3 mb-3">
              <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-white/60 text-sm">Commonwealth Avenue cor. Tandang Sora, New Era, Quezon City</span>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 11.79a19.79 19.79 0 01-3.07-8.67A2 2 0 011.93 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <span className="text-white/60 text-sm">+632 8714-6344</span>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              <span className="text-white/60 text-sm">Please contact hospital for current clinic days</span>
            </div>
            <span className="inline-block bg-gold/12 border border-gold/25 px-3 py-1 text-gold text-xs uppercase tracking-widest">Affiliated Hospital</span>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white">
        <div className="grid md:grid-cols-[1fr_1.5fr] min-h-[480px]">
          <div className="bg-navy p-[20%] flex flex-col justify-center">
            <p className="text-gold text-xs uppercase tracking-widest font-medium mb-3">Find Us</p>
            <h2 className="font-cormorant text-3xl text-white font-light mb-4">Getting<br/><em className="italic">Here</em></h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent mb-8"></div>
            <div className="mb-6">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <div>
                  <div className="text-gold text-xs uppercase tracking-widest font-medium mb-1">Primary Address</div>
                  <span className="text-white/70 text-sm">531 Commonwealth Avenue<br/>General Miguel M. Malvar Medical Foundation<br/>Quezon City, 1100 Metro Manila</span>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 11.79a19.79 19.79 0 01-3.07-8.67A2 2 0 011.93 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <div>
                  <div className="text-gold text-xs uppercase tracking-widest font-medium mb-1">Phone</div>
                  <span className="text-white/70 text-sm">(02) 8932 8867</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <div>
                  <div className="text-gold text-xs uppercase tracking-widest font-medium mb-1">Clinic Hours</div>
                  <span className="text-white/70 text-sm">Please call ahead to confirm<br/>schedule and availability</span>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6!2d121.048!3d14.677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b75a31b27711%3A0xed6bd4dcdff5e924!2sDr.%20Joselito%20Joel%20R.%20Castro%20Jr%20DPAO!5e0!3m2!1sen!2sph!4v1"
              className="w-full h-full min-h-[480px] border-none grayscale-[20%] contrast-[1.05]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section id="appointment" className="bg-cream py-20 px-[8%]">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-gold text-xs uppercase tracking-widest font-medium mb-3">Get in Touch</p>
            <h2 className="font-cormorant text-4xl text-navy font-light mb-4">Book an<br/><em className="italic text-navy-mid">Appointment</em></h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent mb-8"></div>
            
            <div className="py-5 border-b border-black/7 flex items-center gap-4">
              <div className="w-11 h-11 bg-navy flex items-center justify-center text-gold flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 11.79a19.79 19.79 0 01-3.07-8.67A2 2 0 011.93 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <div className="text-text-muted text-xs uppercase tracking-widest font-medium">Telephone</div>
                <div className="text-text-dark text-base">(02) 8932 8867</div>
              </div>
            </div>
            <div className="py-5 border-b border-black/7 flex items-center gap-4">
              <div className="w-11 h-11 bg-navy flex items-center justify-center text-gold flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="text-text-muted text-xs uppercase tracking-widest font-medium">Primary Clinic</div>
                <div className="text-text-dark text-base">531 Commonwealth Ave, Quezon City</div>
              </div>
            </div>
            <div className="py-5 border-b border-black/7 flex items-center gap-4">
              <div className="w-11 h-11 bg-navy flex items-center justify-center text-gold flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              </div>
              <div>
                <div className="text-text-muted text-xs uppercase tracking-widest font-medium">Appointment Policy</div>
                <div className="text-text-dark text-base">Walk-ins welcome; advance booking recommended</div>
              </div>
            </div>
            
            <div className="flex gap-4 flex-wrap mt-8">
              <div className="bg-navy text-white/70 px-4 py-2 text-xs uppercase tracking-widest border-l-2 border-gold">PhilHealth Accredited</div>
              <div className="bg-navy text-white/70 px-4 py-2 text-xs uppercase tracking-widest border-l-2 border-gold">HMO Accepted</div>
              <div className="bg-navy text-white/70 px-4 py-2 text-xs uppercase tracking-widest border-l-2 border-gold">Senior Citizen Discount</div>
            </div>
          </div>
          
          <div className="bg-white border border-black/7 p-10">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="mb-4">
                  <label className="block text-text-muted text-xs uppercase tracking-widest font-medium mb-2">First Name</label>
                  <input type="text" placeholder="Juan" className="w-full border border-black/12 p-3 bg-cream text-text-dark font-sans text-sm outline-none focus:border-gold focus:bg-white transition-colors" />
                </div>
                <div className="mb-4">
                  <label className="block text-text-muted text-xs uppercase tracking-widest font-medium mb-2">Last Name</label>
                  <input type="text" placeholder="Dela Cruz" className="w-full border border-black/12 p-3 bg-cream text-text-dark font-sans text-sm outline-none focus:border-gold focus:bg-white transition-colors" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-text-muted text-xs uppercase tracking-widest font-medium mb-2">Phone Number</label>
                <input type="tel" placeholder="+63 9XX XXX XXXX" className="w-full border border-black/12 p-3 bg-cream text-text-dark font-sans text-sm outline-none focus:border-gold focus:bg-white transition-colors" />
              </div>
              <div className="mb-4">
                <label className="block text-text-muted text-xs uppercase tracking-widest font-medium mb-2">Email Address</label>
                <input type="email" placeholder="juan@email.com" className="w-full border border-black/12 p-3 bg-cream text-text-dark font-sans text-sm outline-none focus:border-gold focus:bg-white transition-colors" />
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="mb-4">
                  <label className="block text-text-muted text-xs uppercase tracking-widest font-medium mb-2">Preferred Clinic</label>
                  <select className="w-full border border-black/12 p-3 bg-cream text-text-dark font-sans text-sm outline-none focus:border-gold focus:bg-white transition-colors">
                    <option value="">Select clinic…</option>
                    <option>Malvar Medical Foundation</option>
                    <option>New Era General Hospital</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-text-muted text-xs uppercase tracking-widest font-medium mb-2">Service Needed</label>
                  <select className="w-full border border-black/12 p-3 bg-cream text-text-dark font-sans text-sm outline-none focus:border-gold focus:bg-white transition-colors">
                    <option value="">Select service…</option>
                    <option>Comprehensive Eye Exam</option>
                    <option>Cataract Consultation</option>
                    <option>Glaucoma Check</option>
                    <option>Retinal Evaluation</option>
                    <option>Refraction / Prescription</option>
                    <option>Pediatric Eye Care</option>
                    <option>Follow-up Visit</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-text-muted text-xs uppercase tracking-widest font-medium mb-2">Message / Concerns (optional)</label>
                <textarea placeholder="Briefly describe your symptoms or questions…" rows="3" className="w-full border border-black/12 p-3 bg-cream text-text-dark font-sans text-sm outline-none focus:border-gold focus:bg-white transition-colors resize-vertical"></textarea>
              </div>
              <button type="submit" className="w-full bg-navy text-gold border-none p-4 font-sans text-sm font-medium uppercase tracking-widest cursor-pointer hover:bg-navy-mid transition-colors">
                Send Appointment Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070f1d] py-12 px-[8%] border-t border-gold/20">
        <div className="grid md:grid-cols-3 gap-12 pb-10 border-b border-white/7 mb-8">
          <div>
            <div className="font-cormorant text-gold-light text-xl font-semibold mb-4">Dr. J.J.R. Castro Jr.<div className="text-xs text-gold uppercase tracking-widest font-light">MD, DPAO · Ophthalmologist</div></div>
            <p className="text-white/40 text-sm leading-relaxed font-light max-w-[280px]">Providing expert, compassionate eye care to patients across Quezon City and Metro Manila. Your vision is our priority.</p>
          </div>
          <div>
            <h4 className="text-gold text-xs uppercase tracking-widest font-medium mb-4">Quick Links</h4>
            <a href="#about" className="block text-white/45 text-sm no-underline mb-2 hover:text-gold-light transition-colors">About Dr. Castro</a>
            <a href="#services" className="block text-white/45 text-sm no-underline mb-2 hover:text-gold-light transition-colors">Eye Care Services</a>
            <a href="#clinics" className="block text-white/45 text-sm no-underline mb-2 hover:text-gold-light transition-colors">Clinic Locations</a>
            <a href="#appointment" className="block text-white/45 text-sm no-underline mb-2 hover:text-gold-light transition-colors">Book Appointment</a>
          </div>
          <div>
            <h4 className="text-gold text-xs uppercase tracking-widest font-medium mb-4">Contact</h4>
            <p className="text-white/45 text-sm mb-2">(02) 8932 8867</p>
            <p className="text-white/45 text-sm mb-2">531 Commonwealth Ave</p>
            <p className="text-white/45 text-sm mb-2">Quezon City, Metro Manila</p>
            <p className="text-white/25 text-xs mt-2">Malvar Medical Foundation, Room 531</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/25 text-xs">© 2025 Dr. Joselito Joel R. Castro Jr., MD, DPAO. All rights reserved.</p>
          <p className="text-white/25 text-xs">Diplomate · Philippine Academy of Ophthalmology</p>
        </div>
      </footer>

      {/* Toast */}
      <div className={`fixed bottom-8 right-8 bg-navy border border-gold text-gold-light p-4 text-sm z-[999] transition-transform duration-400 ${toastVisible ? 'translate-y-0' : 'translate-y-[120%]'}`}>
        ✓ Your appointment request has been received. We'll contact you shortly.
      </div>
    </div>
  )
}

export default App