import React from 'react'
import Card from './components/Card'



const App = () => {

  const jobOpenings = [
  {
    id: 1,
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
    companyName: "IBM",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bengaluru, India",
  },
  {
    id: 2,
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$60/hr",
    location: "Hyderabad, India",
  },
  {
    id: 3,
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "London, UK",
  },
  {
    id: 4,
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Seattle, USA",
  },
  {
    id: 5,
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Cupertino, USA",
  },
  {
    id: 6,
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Los Angeles, USA",
  },
  {
    id: 7,
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    companyName: "NVIDIA",
    datePosted: "4 weeks ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Santa Clara, USA",
  },
  {
    id: 8,
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India",
  },
  {
    id: 9,
    brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Mobile App Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Mumbai, India",
  },
  {
    id: 10,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    companyName: "Oracle",
    datePosted: "5 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Dublin, Ireland",
  },
];


  return (
    
    <div className="parent">

      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
            <Card company={elem.companyName} 
                     brandLogo={elem.brandLogo}
                     datePosted={elem.datePosted}
                     post={elem.post}
                     salary={elem.pay}
                     dur={elem.tag1}
                     level={elem.tag2}
                     loc={elem.location}                
                     />
          </div>
      })}
    

    </div>
  )
}

export default App
