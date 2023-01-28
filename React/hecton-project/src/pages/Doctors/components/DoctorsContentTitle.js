function DoctorsContentTitle({ title, num, text, ranking }) {
  return (
    <div class="doctors_img2_txt">
      <div>{title}</div>
      <p>
        <span>{num} </span>
        {ranking}
      </p>
      <div>{text}</div>
    </div>
  );
}

export default DoctorsContentTitle;
