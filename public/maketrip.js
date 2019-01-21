_handleImageChange(e) {
    e.preventDefault(); // 기본 클릭 동작 무시하도록 하는 코드
  
    let reader = new FileReader(); // 로컬 피씨의 파일 선택하는거 도와주는 클래스
    let file = e.target.files[0]; // 다중 선택도 가능한 api라서 첫번째 사진의 주소만 가져옴
  
    // 로컬 피씨에서 파일 읽는게 끝난 경우 할일 리스너 등록
    reader.onloadend = () => {
      // 읽어온 이미지 파일 변경
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    // 파일 위치에서 파일 실제로 읽어 오기, 비동기 임, 끝나면 위의 리스너 실행됨 
    reader.readAsDataURL(file)
  }