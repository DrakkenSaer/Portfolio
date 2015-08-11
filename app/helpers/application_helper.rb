module ApplicationHelper
  

  def menu_empty?(object)
    object.all.empty? unless signed_in?
  end

  def header_link(title, path)
    current_page?(path) ? link_to(title, path, class: 'nav-link active') : link_to(title, path, class: 'nav-link')
  end

  def page_base(container)
    container.empty? ? 'container' : "#{container}"
  end
  
end
