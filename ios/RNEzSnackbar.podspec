
Pod::Spec.new do |s|
  s.name         = "RNEzSnackbar"
  s.version      = "1.0.0"
  s.summary      = "RNEzSnackbar"
  s.description  = <<-DESC
                  RNEzSnackbar
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNEzSnackbar.git", :tag => "master" }
  s.source_files  = "RNEzSnackbar/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  