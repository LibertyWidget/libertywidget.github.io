# C语言
## 1.基本数据类型
### Def
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882" xmlns="http://www.w3.org/TR/REC-html40"><head><meta http-equiv=Content-Type  content="text/html; charset=gb2312" ><meta name=ProgId  content=Word.Document ><meta name=Generator  content="Microsoft Word 14" ><meta name=Originator  content="Microsoft Word 14" ><title></title><!--[if gte mso 9]><xml><o:DocumentProperties><o:Author>Patrick</o:Author><o:LastAuthor>Patrick</o:LastAuthor><o:Revision>1</o:Revision><o:Pages>1</o:Pages></o:DocumentProperties><o:CustomDocumentProperties><o:KSOProductBuildVer dt:dt="string" >2052-11.1.0.10000</o:KSOProductBuildVer></o:CustomDocumentProperties></xml><![endif]--><!--[if gte mso 9]><xml><o:OfficeDocumentSettings></o:OfficeDocumentSettings></xml><![endif]--><!--[if gte mso 9]><xml><w:WordDocument><w:BrowserLevel>MicrosoftInternetExplorer4</w:BrowserLevel><w:DisplayHorizontalDrawingGridEvery>0</w:DisplayHorizontalDrawingGridEvery><w:DisplayVerticalDrawingGridEvery>2</w:DisplayVerticalDrawingGridEvery><w:DocumentKind>DocumentNotSpecified</w:DocumentKind><w:DrawingGridVerticalSpacing>7.8 磅</w:DrawingGridVerticalSpacing><w:View>Web</w:View><w:Compatibility><w:DontGrowAutofit/><w:BalanceSingleByteDoubleByteWidth/><w:DoNotExpandShiftReturn/><w:UseFELayout/></w:Compatibility><w:Zoom>0</w:Zoom></w:WordDocument></xml><![endif]--><!--[if gte mso 9]><xml><w:LatentStyles DefLockedState="false"  DefUnhideWhenUsed="true"  DefSemiHidden="true"  DefQFormat="false"  DefPriority="99"  LatentStyleCount="260" >
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  QFormat="true"  Name="Normal" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  QFormat="true"  Name="heading 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  QFormat="true"  Name="heading 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  QFormat="true"  Name="heading 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  QFormat="true"  Name="heading 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  QFormat="true"  Name="heading 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  QFormat="true"  Name="heading 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  QFormat="true"  Name="heading 7" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  QFormat="true"  Name="heading 8" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  QFormat="true"  Name="heading 9" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="index 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="index 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="index 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="index 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="index 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="index 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="index 7" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="index 8" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="index 9" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="toc 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="toc 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="toc 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="toc 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="toc 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="toc 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="toc 7" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="toc 8" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="toc 9" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Normal Indent" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="footnote text" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="annotation text" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="header" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="footer" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="index heading" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  QFormat="true"  Name="caption" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="table of figures" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="envelope address" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="envelope return" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="footnote reference" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="annotation reference" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="line number" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="page number" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="endnote reference" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="endnote text" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="table of authorities" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="macro" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="toa heading" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Bullet" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Number" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Bullet 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Bullet 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Bullet 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Bullet 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Number 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Number 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Number 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Number 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  QFormat="true"  Name="Title" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Closing" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Signature" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  UnhideWhenUsed="false"  Name="Default Paragraph Font" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Body Text" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Body Text Indent" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Continue" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Continue 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Continue 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Continue 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="List Continue 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Message Header" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  QFormat="true"  Name="Subtitle" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Salutation" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Date" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Body Text First Indent" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Body Text First Indent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Note Heading" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Body Text 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Body Text 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Body Text Indent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Body Text Indent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Block Text" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Hyperlink" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="FollowedHyperlink" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  QFormat="true"  Name="Strong" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  QFormat="true"  Name="Emphasis" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Document Map" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Plain Text" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="E-mail Signature" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Normal (Web)" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="HTML Acronym" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="HTML Address" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="HTML Cite" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="HTML Code" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="HTML Definition" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="HTML Keyboard" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="HTML Preformatted" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="HTML Sample" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="HTML Typewriter" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="HTML Variable" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  UnhideWhenUsed="false"  QFormat="true"  Name="Normal Table" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="annotation subject" ></w:LsdException>
<w:LsdException Locked="false"  Priority="99"  SemiHidden="false"  Name="No List" ></w:LsdException>
<w:LsdException Locked="false"  Priority="99"  SemiHidden="false"  Name="1 / a / i" ></w:LsdException>
<w:LsdException Locked="false"  Priority="99"  SemiHidden="false"  Name="1 / 1.1 / 1.1.1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="99"  SemiHidden="false"  Name="Article / Section" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Simple 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Simple 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Simple 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Classic 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Classic 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Classic 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Classic 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Colorful 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Colorful 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Colorful 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Columns 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Columns 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Columns 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Columns 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Columns 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Grid 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Grid 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Grid 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Grid 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Grid 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Grid 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Grid 7" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Grid 8" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table List 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table List 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table List 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table List 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table List 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table List 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table List 7" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table List 8" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table 3D effects 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table 3D effects 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table 3D effects 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Contemporary" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Elegant" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Professional" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Subtle 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Subtle 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Web 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Web 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Web 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Balloon Text" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Grid" ></w:LsdException>
<w:LsdException Locked="false"  Priority="0"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Table Theme" ></w:LsdException>
<w:LsdException Locked="false"  Priority="99"  SemiHidden="false"  Name="Placeholder Text" ></w:LsdException>
<w:LsdException Locked="false"  Priority="99"  SemiHidden="false"  Name="No Spacing" ></w:LsdException>
<w:LsdException Locked="false"  Priority="60"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Shading" ></w:LsdException>
<w:LsdException Locked="false"  Priority="61"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light List" ></w:LsdException>
<w:LsdException Locked="false"  Priority="62"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Grid" ></w:LsdException>
<w:LsdException Locked="false"  Priority="63"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="64"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="65"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="66"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="67"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="68"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="69"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="70"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Dark List" ></w:LsdException>
<w:LsdException Locked="false"  Priority="71"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Shading" ></w:LsdException>
<w:LsdException Locked="false"  Priority="72"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful List" ></w:LsdException>
<w:LsdException Locked="false"  Priority="73"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Grid" ></w:LsdException>
<w:LsdException Locked="false"  Priority="60"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Shading Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="61"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light List Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="62"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Grid Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="63"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 1 Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="64"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 2 Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="65"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 1 Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="99"  SemiHidden="false"  Name="List Paragraph" ></w:LsdException>
<w:LsdException Locked="false"  Priority="99"  SemiHidden="false"  Name="Quote" ></w:LsdException>
<w:LsdException Locked="false"  Priority="99"  SemiHidden="false"  Name="Intense Quote" ></w:LsdException>
<w:LsdException Locked="false"  Priority="66"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 2 Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="67"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 1 Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="68"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 2 Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="69"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 3 Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="70"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Dark List Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="71"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Shading Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="72"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful List Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="73"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Grid Accent 1" ></w:LsdException>
<w:LsdException Locked="false"  Priority="60"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Shading Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="61"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light List Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="62"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Grid Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="63"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 1 Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="64"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 2 Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="65"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 1 Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="66"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 2 Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="67"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 1 Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="68"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 2 Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="69"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 3 Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="70"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Dark List Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="71"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Shading Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="72"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful List Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="73"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Grid Accent 2" ></w:LsdException>
<w:LsdException Locked="false"  Priority="60"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Shading Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="61"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light List Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="62"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Grid Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="63"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 1 Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="64"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 2 Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="65"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 1 Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="66"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 2 Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="67"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 1 Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="68"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 2 Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="69"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 3 Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="70"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Dark List Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="71"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Shading Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="72"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful List Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="73"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Grid Accent 3" ></w:LsdException>
<w:LsdException Locked="false"  Priority="60"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Shading Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="61"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light List Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="62"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Grid Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="63"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 1 Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="64"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 2 Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="65"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 1 Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="66"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 2 Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="67"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 1 Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="68"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 2 Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="69"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 3 Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="70"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Dark List Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="71"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Shading Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="72"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful List Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="73"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Grid Accent 4" ></w:LsdException>
<w:LsdException Locked="false"  Priority="60"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Shading Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="61"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light List Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="62"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Grid Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="63"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 1 Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="64"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 2 Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="65"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 1 Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="66"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 2 Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="67"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 1 Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="68"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 2 Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="69"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 3 Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="70"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Dark List Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="71"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Shading Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="72"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful List Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="73"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Grid Accent 5" ></w:LsdException>
<w:LsdException Locked="false"  Priority="60"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Shading Accent 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="61"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light List Accent 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="62"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Light Grid Accent 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="63"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 1 Accent 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="64"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Shading 2 Accent 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="65"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 1 Accent 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="66"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium List 2 Accent 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="67"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 1 Accent 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="68"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 2 Accent 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="69"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Medium Grid 3 Accent 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="70"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Dark List Accent 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="71"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Shading Accent 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="72"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful List Accent 6" ></w:LsdException>
<w:LsdException Locked="false"  Priority="73"  SemiHidden="false"  UnhideWhenUsed="false"  Name="Colorful Grid Accent 6" ></w:LsdException>
</w:LatentStyles></xml><![endif]--><style>
@font-face{
font-family:"Times New Roman";
}

@font-face{
font-family:"宋体";
}

@font-face{
font-family:"Wingdings";
}

@font-face{
font-family:"Calibri";
}

@font-face{
font-family:"Helvetica";
}

p.MsoNormal{
mso-style-name:正文;
mso-style-parent:"";
margin:0pt;
margin-bottom:.0001pt;
mso-pagination:none;
text-align:justify;
text-justify:inter-ideograph;
font-family:Calibri;
mso-fareast-font-family:宋体;
mso-bidi-font-family:'Times New Roman';
font-size:10.5000pt;
mso-font-kerning:1.0000pt;
}

span.10{
font-family:'Times New Roman';
}

p.p{
mso-style-name:"普通\(网站\)";
margin-top:5.0000pt;
margin-right:0.0000pt;
margin-bottom:5.0000pt;
margin-left:0.0000pt;
mso-margin-top-alt:auto;
mso-margin-bottom-alt:auto;
mso-pagination:none;
text-align:left;
font-family:Calibri;
mso-fareast-font-family:宋体;
mso-bidi-font-family:'Times New Roman';
font-size:12.0000pt;
}

span.msoIns{
mso-style-type:export-only;
mso-style-name:"";
text-decoration:underline;
text-underline:single;
color:blue;
}

span.msoDel{
mso-style-type:export-only;
mso-style-name:"";
text-decoration:line-through;
color:red;
}

table.MsoNormalTable{
mso-style-name:普通表格;
mso-style-parent:"";
mso-style-noshow:yes;
mso-tstyle-rowband-size:0;
mso-tstyle-colband-size:0;
mso-padding-alt:0.0000pt 5.4000pt 0.0000pt 5.4000pt;
mso-para-margin:0pt;
mso-para-margin-bottom:.0001pt;
mso-pagination:widow-orphan;
font-family:'Times New Roman';
font-size:10.0000pt;
mso-ansi-language:#0400;
mso-fareast-language:#0400;
mso-bidi-language:#0400;
}
@page{mso-page-border-surround-header:no;
	mso-page-border-surround-footer:no;}@page Section0{
margin-top:72.0000pt;
margin-bottom:72.0000pt;
margin-left:90.0000pt;
margin-right:90.0000pt;
size:595.3000pt 841.9000pt;
layout-grid:15.6000pt;
}
div.Section0{page:Section0;}</style></head><body style="tab-interval:21pt;text-justify-trim:punctuation;" ><!--StartFragment--><div class="Section0"  style="layout-grid:15.6000pt;" ><table class=MsoNormalTable  border=0  cellspacing=0  style="border-collapse:collapse;width:625.5000pt;margin-left:3.1500pt;
margin-left:6.7500pt;margin-right:6.7500pt;border:none;
mso-padding-alt:0.0000pt 0.0000pt 0.0000pt 0.0000pt ;" ><tr><td valign=top  style="padding:2.2500pt 2.2500pt 2.2500pt 2.2500pt ;border-left:1.0000pt solid rgb(85,85,85);mso-border-left-alt:0.7500pt solid rgb(85,85,85);
border-right:1.0000pt solid rgb(85,85,85);mso-border-right-alt:0.7500pt solid rgb(85,85,85);border-top:1.0000pt solid rgb(85,85,85);
mso-border-top-alt:0.7500pt solid rgb(85,85,85);border-bottom:1.0000pt solid rgb(85,85,85);mso-border-bottom-alt:0.7500pt solid rgb(85,85,85);
background:rgb(85,85,85);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;" ><b><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(255,255,255);
letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
font-style:normal;font-size:9.0000pt;mso-font-kerning:0.0000pt;" >类型</span></b><b><span style="font-family:Helvetica;color:rgb(255,255,255);letter-spacing:0.0000pt;
font-weight:bold;text-transform:none;font-style:normal;
font-size:9.0000pt;mso-font-kerning:1.0000pt;" ></span></b></p></td><td valign=top  style="padding:2.2500pt 2.2500pt 2.2500pt 2.2500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(85,85,85);mso-border-right-alt:0.7500pt solid rgb(85,85,85);border-top:1.0000pt solid rgb(85,85,85);
mso-border-top-alt:0.7500pt solid rgb(85,85,85);border-bottom:1.0000pt solid rgb(85,85,85);mso-border-bottom-alt:0.7500pt solid rgb(85,85,85);
background:rgb(85,85,85);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;" ><b><span style="font-family:Helvetica;color:rgb(255,255,255);letter-spacing:0.0000pt;
font-weight:bold;text-transform:none;font-style:normal;
font-size:9.0000pt;mso-font-kerning:0.0000pt;" >位</span></b><b><span style="font-family:Helvetica;color:rgb(255,255,255);letter-spacing:0.0000pt;
font-weight:bold;text-transform:none;font-style:normal;
font-size:9.0000pt;mso-font-kerning:1.0000pt;" ></span></b></p></td><td valign=top  style="padding:2.2500pt 2.2500pt 2.2500pt 2.2500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(85,85,85);mso-border-right-alt:0.7500pt solid rgb(85,85,85);border-top:1.0000pt solid rgb(85,85,85);
mso-border-top-alt:0.7500pt solid rgb(85,85,85);border-bottom:1.0000pt solid rgb(85,85,85);mso-border-bottom-alt:0.7500pt solid rgb(85,85,85);
background:rgb(85,85,85);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;" ><b><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(255,255,255);
letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
font-style:normal;font-size:9.0000pt;mso-font-kerning:0.0000pt;" >范围</span></b><b><span style="font-family:Helvetica;color:rgb(255,255,255);letter-spacing:0.0000pt;
font-weight:bold;text-transform:none;font-style:normal;
font-size:9.0000pt;mso-font-kerning:1.0000pt;" ></span></b></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >char</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >1 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >-128 到 127 或者 0 到 255</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >unsigned char</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >1 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >0 到 255</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >signed char</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >1 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >-128 到 127</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >int</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >4 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >-2147483648 到 2147483647</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >unsigned int</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >4 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >0 到 4294967295</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >signed int</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >4 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >-2147483648 到 2147483647</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >short int</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >2 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >-32768 到 32767</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >unsigned short int</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >2 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >0 到 65,535</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >signed short int</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >2 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >-32768 到 32767</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >long int</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >8 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >-9,223,372,036,854,775,808 到 9,223,372,036,854,775,807</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >signed long int</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >8 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >-9,223,372,036,854,775,808 到 9,223,372,036,854,775,807</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >unsigned long int</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >8 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >0 到 18,446,744,073,709,551,615</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >float</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >4 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >精度型占4个字节（32位）内存空间，+/- 3.4e +/- 38 (~7 个数字)</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >double</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >8 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >双精度型占8 个字节（64位）内存空间，+/- 1.7e +/- 308 (~15 个数字)</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >long double</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >16 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(255,255,255);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >长双精度型 16 个字节（128位）内存空间，可提供18-19位有效数字。</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr><tr><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:1.0000pt solid rgb(212,212,212);mso-border-left-alt:0.7500pt solid rgb(212,212,212);
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >wchar_t</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >2 或 4 个字节</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td><td valign=top  style="padding:5.2500pt 3.7500pt 5.2500pt 3.7500pt ;border-left:none;mso-border-left-alt:none;
border-right:1.0000pt solid rgb(212,212,212);mso-border-right-alt:0.7500pt solid rgb(212,212,212);border-top:none;
mso-border-top-alt:0.7500pt solid rgb(212,212,212);border-bottom:1.0000pt solid rgb(212,212,212);mso-border-bottom-alt:0.7500pt solid rgb(212,212,212);
background:rgb(246,244,240);" ><p class=MsoNormal  style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:0.0000pt;
margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
text-align:left;vertical-align:top;line-height:21.0000pt;" ><span style="mso-spacerun:'yes';font-family:Helvetica;color:rgb(51,51,51);
letter-spacing:0.0000pt;text-transform:none;font-style:normal;
font-size:9.5000pt;mso-font-kerning:0.0000pt;" >1 个宽字符</span><span style="font-family:Helvetica;color:rgb(51,51,51);letter-spacing:0.0000pt;
text-transform:none;font-style:normal;font-size:9.5000pt;
mso-font-kerning:1.0000pt;" ></span></p></td></tr></table><p class=MsoNormal ><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;mso-font-kerning:1.0000pt;" ></span></p></div><!--EndFragment--></body></html>

### Code
``` C++
#include<iostream>  
#include <limits>
 
using namespace std;  
  
int main()  
{  
    cout << "type: \t\t" << "************size**************"<< endl;  
    cout << "bool: \t\t" << "所占字节数：" << sizeof(bool);  
    cout << "\t最大值：" << (numeric_limits<bool>::max)();  
    cout << "\t\t最小值：" << (numeric_limits<bool>::min)() << endl;  
    cout << "char: \t\t" << "所占字节数：" << sizeof(char);  
    cout << "\t最大值：" << (numeric_limits<char>::max)();  
    cout << "\t\t最小值：" << (numeric_limits<char>::min)() << endl;  
    cout << "signed char: \t" << "所占字节数：" << sizeof(signed char);  
    cout << "\t最大值：" << (numeric_limits<signed char>::max)();  
    cout << "\t\t最小值：" << (numeric_limits<signed char>::min)() << endl;  
    cout << "unsigned char: \t" << "所占字节数：" << sizeof(unsigned char);  
    cout << "\t最大值：" << (numeric_limits<unsigned char>::max)();  
    cout << "\t\t最小值：" << (numeric_limits<unsigned char>::min)() << endl;  
    cout << "wchar_t: \t" << "所占字节数：" << sizeof(wchar_t);  
    cout << "\t最大值：" << (numeric_limits<wchar_t>::max)();  
    cout << "\t\t最小值：" << (numeric_limits<wchar_t>::min)() << endl;  
    cout << "short: \t\t" << "所占字节数：" << sizeof(short);  
    cout << "\t最大值：" << (numeric_limits<short>::max)();  
    cout << "\t\t最小值：" << (numeric_limits<short>::min)() << endl;  
    cout << "int: \t\t" << "所占字节数：" << sizeof(int);  
    cout << "\t最大值：" << (numeric_limits<int>::max)();  
    cout << "\t最小值：" << (numeric_limits<int>::min)() << endl;  
    cout << "unsigned: \t" << "所占字节数：" << sizeof(unsigned);  
    cout << "\t最大值：" << (numeric_limits<unsigned>::max)();  
    cout << "\t最小值：" << (numeric_limits<unsigned>::min)() << endl;  
    cout << "long: \t\t" << "所占字节数：" << sizeof(long);  
    cout << "\t最大值：" << (numeric_limits<long>::max)();  
    cout << "\t最小值：" << (numeric_limits<long>::min)() << endl;  
    cout << "unsigned long: \t" << "所占字节数：" << sizeof(unsigned long);  
    cout << "\t最大值：" << (numeric_limits<unsigned long>::max)();  
    cout << "\t最小值：" << (numeric_limits<unsigned long>::min)() << endl;  
    cout << "double: \t" << "所占字节数：" << sizeof(double);  
    cout << "\t最大值：" << (numeric_limits<double>::max)();  
    cout << "\t最小值：" << (numeric_limits<double>::min)() << endl;  
    cout << "long double: \t" << "所占字节数：" << sizeof(long double);  
    cout << "\t最大值：" << (numeric_limits<long double>::max)();  
    cout << "\t最小值：" << (numeric_limits<long double>::min)() << endl;  
    cout << "float: \t\t" << "所占字节数：" << sizeof(float);  
    cout << "\t最大值：" << (numeric_limits<float>::max)();  
    cout << "\t最小值：" << (numeric_limits<float>::min)() << endl;  
    cout << "size_t: \t" << "所占字节数：" << sizeof(size_t);  
    cout << "\t最大值：" << (numeric_limits<size_t>::max)();  
    cout << "\t最小值：" << (numeric_limits<size_t>::min)() << endl;  
    cout << "string: \t" << "所占字节数：" << sizeof(string) << endl;  
    // << "\t最大值：" << (numeric_limits<string>::max)() << "\t最小值：" << (numeric_limits<string>::min)() << endl;  
    cout << "type: \t\t" << "************size**************"<< endl;  
    return 0;  
}

```
### result
``` c++
type:         ************size**************
bool:               所占字节数：1    最大值：1                      最小值：0
char:               所占字节数：1    最大值：                       最小值：?
signed char:        所占字节数：1    最大值：                       最小值：?
unsigned char:      所占字节数：1    最大值：?                      最小值：
wchar_t:            所占字节数：4    最大值：2147483647             最小值：-2147483648
short:              所占字节数：2    最大值：32767                  最小值：-32768
int:                所占字节数：4    最大值：2147483647             最小值：-2147483648
unsigned:           所占字节数：4    最大值：4294967295             最小值：0
long:               所占字节数：8    最大值：9223372036854775807    最小值：-9223372036854775808
unsigned long:      所占字节数：8    最大值：18446744073709551615   最小值：0
double:             所占字节数：8    最大值：1.79769e+308           最小值：2.22507e-308
long double:        所占字节数：16   最大值：1.18973e+4932          最小值：3.3621e-4932
float:              所占字节数：4    最大值：3.40282e+38            最小值：1.17549e-38
size_t:             所占字节数：8    最大值：18446744073709551615   最小值：0
string:             所占字节数：24
type:         ************size**************
```

## 2.控制台接受输入
``` C++
scanf("%d",&i);  //控制台输入，&取地址符
```
## 3.指针
### Def
``
    1.指针存储的是变量的内存地址
    2.内存地址，系统给数据分配的编号（门牌号）
    3.变量名，对内存空间上的一段数据的抽象
``
### Code
``` C++
int * p;//int类型的指针
short *p;//short类型的指针
long *p;//long类型的指针
...
//例如
    float f = 89.5f;
	//创建一个float类型的指针
	float *fp = &f;//&f获取变量地址符
   //打印内存地址
	printf("%#x\n", fp);
```
## 4.休眠
``` C++
Sleep(1000);//毫秒
```
## 5.指针类型
``
    如果声明一个int的指针 赋值一个double的值装不下 ，所以有指针类型
``
<br><br>
<font color="red"> 1.指针为什么要有类型？</font>
-   1.指针有类型，地址没有类型<br>
-   2.地址只是开始的位置，类型读取到什么位置结束

## 6.NULL指针
``` c++
//不能访问空指针
int *p = NULL;
//访问内存地址0x000000操作系统不允许
//p = 100; //操作系统不允许访问
```
## 7.多级指针
``` c++
//指针保存的是变量的地址，保存的这个变量还可以是一个指针变量
//动态内存分配给二维数组
int a = 50;
//p1上保存的a的地址
int* p1 = &a;	
//p2上保存的p1的地址
 int** p2 = &p1;
 //三级指针
//int*** p3 = &p2;
```
## 8.指针运算符
<font color="red"> 指针的运算，一般在数组遍历时才有意义，基于数组在内存中线性排列的方式</font>

``` c++
//数组在内存中连续存储
int ids[] = { 78, 90, 23, 65, 19 };
int *p = ids;//ids就是数组的首地址
p++ 或者 p-- 有效  如不是连续的地址无效
```
## 9.通过指针给数组赋值
``` C++
int uids[5];//声明长度为5的数组
int *p =uids;//获取首指针
int i = 0; //i是数组元素的值
for (; p < uids + 5; p++){
    *p = i;
	i++;
 }
 ```
 ## 10.函数指针
 ``` C++
 int msg(char * msg){
  MessageBox(0,msg,"标题",0);//在界面上面弹框
  return 0;  
}
void main(){
    //函数指针
	//函数返回值类型，函数指针的名称，函数的参数列表
     int(*fun_msg)   (char * msg)  =  msg;
     fun_msg("消息类容");
    getchar();
}
 ```
 ## 10.指针传递
 ``` C++
 int add(int a,int b){
	return a + b;
}
int msg(int (*fun_msg)(int a ,int b),int m,int n){
    printf("执行一段代码...\n");
    printf("执行回调函数...\n");
    int r = fun_msg(m, n);
    printf("执行结果：%d\n",r);
}
void main(){
    //加法
	//int(*func_p)(int a, int b) = add;
   msg(div, 10, 20); //通过 10.函数指针 演变而来
}   
 ```
## 11.结构体 
### Def
    1.结构体就是JAVA中的类
    2.关键字 struct
    3.嵌套结构体
    4.匿名结构体
### Code
``` C++
//第一种 匿名结构体
struct Man{
    char name[20];
    int age;
}
//第二种  控制结构体变量的个数（限量版），相当于单例
struct Man{
    char name[20];
    int age;
} m1
//第三种
typedef int Age; //相当于mysql 别名
//结构体嵌套
struct Teacher{
    cahr name[20];
}

struct Stu{
    char name[20];
    int age;
    struct Tracher t;  //嵌套
}
//结构体嵌套2
struct Stu{
    char name[20];
    int age;
    struct Teacher{
        cahr name[20];
    }
}
```
## 12.结构体与指针
``` C++
struct Man{
	char name[20];
	int age;
};

void main(){
    struct Man m1={"Jack",20};
    //结构体指针
	struct Man *p = &m1;
   printf("%s,%d\n", m1.name, m1.age);
   //“->”（箭头）是“(*p).”简写形式
	printf("%s,%d\n", p->name, p->age);
｝ 
```
## 13.指针与结构体数组
```C++
struct Man{
	char name[20];
	int age;
};
//结构体数组
struct Man mans[] = { {"Jack",20}, {"Rose", 19} };
//获取指针
struct Man *p = mans;
//遍历
for (; p < mans + 2; p++){
	printf("%s,%d\n", p->name, p->age);
}
```