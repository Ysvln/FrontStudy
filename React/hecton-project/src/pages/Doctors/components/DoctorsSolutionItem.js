function DoctorsSolutionItem({ title, text }) {
  return (
    <>
      <div class="doctors">
        <img
          src="https://www.hectonproject.com/icon/doctors.svg"
          alt=""
          width="180px"
        />
        <div>{title}</div>
      </div>
      <p>{text}</p>
    </>
  );
}

export default DoctorsSolutionItem;
