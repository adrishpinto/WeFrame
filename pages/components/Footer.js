const Footer = () => {
  return (
    <div className="mt-[92px] mb-[200px]">
      <div className="w-full h-[0.5px] bg-[#39393930]"></div>
      <div className="mt-[41px] sm:ml-[30px] sm:h-[130px]  flex gap-[77px] items-center sm:flex-row flex-col ">
        <img src="logo.svg" alt="logo" className="w-[133px] h-[65px]" />
        <div className="w-[180px] h-[130px] space-y-[1px]">
          <h1 className="text-[16px] font-[600] cg-font uppercase">
            INFOS PRATIQUES
          </h1>
          <p className="text-[14px] text-[#393939]">À propos</p>
          <p className="text-[14px] text-[#393939]">Livraisons & Reprises</p>
          <p className="text-[14px] text-[#393939]">Mode d’emploi</p>
          <p className="text-[14px] text-[#393939]">F.A.Q</p>
        </div>

        <div className="w-[180px] h-[130px] space-y-[1px]">
          <h1 className="text-[16px] font-[600] cg-font uppercase">LÉGAL</h1>
          <p className="text-[14px] text-[#393939]">Mentions légales</p>
          <p className="text-[14px] text-[#393939]">CGU</p>
          <p className="text-[14px] text-[#393939]">CGV</p>
          <p className="text-[14px] text-[#393939]">
            Politique de confidentialité
          </p>
        </div>

        <div className="w-[180px] h-[130px] space-y-[1px]">
          <h1 className="text-[16px] font-[600] cg-font uppercase">
            MON COMPTE
          </h1>
          <p className="text-[14px] text-[#393939]">Accéder à mon compte</p>
          <p className="text-[14px] text-[#393939]">Ma liste d’envie</p>
          <p className="text-[14px] text-[#393939]">Créer un compte</p>
          <p className="text-[14px] text-[#393939]">Mot de passe oublié</p>
        </div>
        <div className="self-start sm:ml-auto flex-col mx-auto text-center sm:text-right sm:mr-10">
          <h1 className="font-[700]">NOUS SUIVRE</h1>
          <div className="flex gap-[10px]">
            <img src="twitter.svg" className="size-[42px]" alt="twitter" />
            <img src="instagram.svg" className="size-[42px]" alt="insta" />
            <img src="linkedin.svg" className="size-[42px]" alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
